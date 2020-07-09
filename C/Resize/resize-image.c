#include <stdio.h>
#include <stdlib.h>

#include "bmp.h"

int main(int argc, char *argv[])
{
    // Save the resize factor from command line
    int n = atoi(argv[1]);
    // Save pointers to files from command line
    char *infile = argv[2];
    char *outfile = argv[3];

    // Correct usage: 3 command-line args; n within range 1-100
    if (argc != 4 || n <= 0 || n > 100)
    {
        fprintf(stderr, "Usage: n infile outfile\n");
        return 1;
    }

    // Open input file
    FILE *inptr = fopen(infile, "r");
    if (inptr == NULL)
    {
        fprintf(stderr, "Could not open %s\n", infile);
        return 2;
    }

    // Open output file
    FILE *outptr = fopen(outfile, "w");
    if (outptr == NULL)
    {
        fprintf(stderr, "Could not open %s\n", outfile);
        return 3;
    }

    // Create temporary file buffer
    BITMAPFILEHEADER bf;
    // Read input file's BITMAPFILEHEADER
    fread(&bf, sizeof(BITMAPFILEHEADER), 1, inptr);

    // Create temporary info buffer
    BITMAPINFOHEADER bi;
    // Read input file's BITMAPINFOHEADER
    fread(&bi, sizeof(BITMAPINFOHEADER), 1, inptr);

    // Ensure input file is a 24-bit uncompressed BMP 4.0
    if (bf.bfType != 0x4d42 || bf.bfOffBits != 54 || bi.biSize != 40 ||
        bi.biBitCount != 24 || bi.biCompression != 0)
    {
        fclose(outptr);
        fclose(inptr);
        fprintf(stderr, "Unsupported file format.\n");
        return 4;
    }

    // Save old biWidth & biHeight
    int oldWidth = bi.biWidth;
    int oldHeight = bi.biHeight;
    // Calculate new BITMAPINFOHEADER width
    int reWidth = bi.biWidth * n;
    // Calculate new BITMAPINFOHEADER height
    int reHeight = bi.biHeight * n;
    // Update biWidth
    bi.biHeight *= n;
    bi.biWidth *= n;

    // Original padding for scanlines
    int padding = (4 - (oldWidth * sizeof(RGBTRIPLE)) % 4) % 4;
    // Resized padding for scanlines
    int rePadding = (4 - (reWidth * sizeof(RGBTRIPLE)) % 4) % 4;

    // Update image size
    bi.biSizeImage = ((sizeof(RGBTRIPLE) * reWidth) + rePadding) * abs(reHeight);
    // Update file size
    bf.bfSize = bi.biSizeImage + sizeof(BITMAPFILEHEADER) + sizeof(BITMAPINFOHEADER);

    // Write output file's BITMAPFILEHEADER
    fwrite(&bf, sizeof(BITMAPFILEHEADER), 1, outptr);
    // Write output file's BITMAPINFOHEADER
    fwrite(&bi, sizeof(BITMAPINFOHEADER), 1, outptr);

    int counterHeight = 0;
    // Loop through new pic's height
    for (int i = 0; i < abs(reHeight); i++)
    {
        int counterWidth = 0;
        // Loop through new pic's width/scanline
        for (int j = 0; j < reWidth; j++)
        {
            // temp storage
            RGBTRIPLE triple;
            // read from old file
            fread(&triple, sizeof(RGBTRIPLE), 1, inptr);
            fwrite(&triple, sizeof(RGBTRIPLE), 1, outptr);
            if (counterWidth < (n - 1))
            {
                // go back a pixel in the old file
                fseek(inptr, -(sizeof(RGBTRIPLE)), SEEK_CUR);
                counterWidth++;
            }
            else
            {
                counterWidth = 0;
            }
        }
        if (counterHeight < (n - 1))
        {
            fseek(inptr, -(sizeof(RGBTRIPLE) * oldWidth), SEEK_CUR);
            counterHeight++;
        }
        else
        {
            counterHeight = 0;
            fseek(inptr, padding, SEEK_CUR);
        }
        for (int m = 0; m < rePadding; m++)
        {
            fputc(0x00, outptr);
        }
    }

    // close infile
    fclose(inptr);

    // close outfile
    fclose(outptr);

    // success
    return 0;
}
