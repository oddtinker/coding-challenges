#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[])
{
    // Check for correct usage
    if (argc != 2)
    {
        fprintf(stderr, "Usage: ./recover image\n");
        return 1;
    }

    // Save input file, filename template and files counter
    char *infile = argv[1];
    char filename[8];
    int counter = 0;

    // Open input file and check if it's NULL
    FILE *inptr = fopen(infile, "r");
    if (inptr == NULL)
    {
        fprintf(stderr, "Could not open %s\n", infile);
        return 2;
    }

    // Open output file
    FILE *outptr = NULL;

    // Temporary block of memory with the size of 512 bytes (one segment on the memory card)
    unsigned char buffer[512];

    // Read 512 B at a time; repeat until EOF reached
    while (fread(buffer, sizeof(buffer), 1, inptr) == 1)
    {
        if (buffer[0] == 0xff && buffer[1] == 0xd8 && buffer[2] == 0xff && (buffer[3] & 0xf0) == 0xe0)
        {
            if (counter > 0)
            {
                // Close the file that was open before
                fclose(outptr);
                // Print filename in format 000.jpg
                sprintf(filename, "%03i.jpg", counter);
                // Open the newly created JPEG
                outptr = fopen(filename, "w");
                // Transfer the info from the buffer to the output file
                fwrite(buffer, sizeof(buffer), 1, outptr);
                // Increment the counter
                counter += 1;
            }
            if (counter == 0)
            {
                sprintf(filename, "%03i.jpg", counter);
                outptr = fopen(filename, "w");
                fwrite(buffer, sizeof(buffer), 1, outptr);
                counter += 1;
            }
        }
        else if (counter > 0)
        {
            fwrite(buffer, sizeof(buffer), 1, outptr);
        }
    }
    // Close the input file
    fclose(inptr);
    fclose(outptr);
    return 0;
}
