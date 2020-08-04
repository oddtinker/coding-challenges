#include <cs50.h>
#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include <stdlib.h>

int main(int argc, string argv[])
{
    // Check if user entered ONE argument
    if (argc == 2)
    {
        // KEY
        // Loop through every char of string
        for (int i = 0; i < strlen(argv[1]); i++)
        {
            // Validate each char of the string as a digit
            if (isdigit(argv[1][i]) == false)
            {
                printf("Usage: ./caesar key\n");
                return 1;
            }
        }
        // Convert string argument into integer and print it
        int string_to_integer = atoi(argv[1]);
        
        // Prompt plaintext from user and print ciphertext
        string plaintext = get_string("plaintext: ");
        
        printf("ciphertext: ");
        // Shift all chars by key
        for (int j = 0; j < strlen(plaintext); j++)
        {
            if (isalpha(plaintext[j]) == false)
            {
                printf("%c", plaintext[j]);
            }
            else
            {
                if (isupper(plaintext[j]))
                {
                    printf("%c", (((plaintext[j] - 65) + string_to_integer) % 26) + 65);
                }
                if (islower(plaintext[j]))
                {
                    printf("%c", (((plaintext[j] - 97) + string_to_integer) % 26) + 97);
                }
            }
        }
        printf("\n");
    }
    else
    {
        printf("Usage: ./caesar key\n");
        return 1;
    }
}
