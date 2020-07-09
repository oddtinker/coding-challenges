#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <ctype.h>
#include <stdlib.h>

// Declare a function
int shift(char c);

int main(int argc, string argv[])
{
    // Declare cipher int for use within scope of MAIN
    int cipher;
    
    // User MUST enter ONE cl argument that is fully alphabetical
    if (argc == 2)
    {
        // Check if every char is a letter, otherwise throw an error
        for (int i = 0; i < strlen(argv[1]); i++)
        {
            if (isalpha(argv[1][i]) == false)
            {
                printf("Usage: ./vigenere keyword\n");
                return 1;
            }
        }
        
        // Prompt plaintext from user and print ciphertext
        string plaintext = get_string("plaintext: ");
        printf("ciphertext: ");
        
        // Loop through every element of command line argument
        for (int j = 0; j < strlen(argv[1]); j++)
        {
            for (int k = 0; k < strlen(plaintext); k++)
            {
                char keyword = argv[1][j];
                cipher = shift(keyword);
                // If element IS NOT a char, print as is
                if (isalpha(plaintext[k]) == false)
                {
                    printf("%c", plaintext[k]);
                }
                else
                {
                    printf("%c", plaintext[k] + cipher);
/*                    // If element IS a char, shift plaintext char by cipher
                    if (isupper(plaintext[k]) == true)
                    {
                        printf("%c", plaintext[k] + cipher);
                    }
                    if (islower(plaintext[k]) == true)
                    {
                        printf("%c", plaintext[k] + cipher);
                    }
*/                    
                }
            }
        }
        printf ("\n");
    }
    else
    {
        printf("Usage: ./vigenere keyword\n");
        return 1;
    }
}

// Calculate shift value for letter
int shift(char c)
{
    int key;
    // Uppercase
    if (c >= 65 || c <= 90)
    {
        key = (c - 65) % 26;
    }
    // Lowercase
    if (c >= 97 || c <= 122)
    {
        key = (c - 97) % 26;
    }
    return key;
}
