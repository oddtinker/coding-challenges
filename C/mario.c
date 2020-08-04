#include <stdio.h>
#include <cs50.h>

int main(void)
{
    int i;
    
    // Prompt for number until integer within range
    do 
    {
        i = get_int("Height: ");
    }
    while (i < 1 || i > 8);
    
    // Print vertical lines
    for (int v = 1; v <= i; v++)
    {
        // Function to figure out how much space is left
        int fu = i - v;
        // Loop prints spaces until equal to fu value 
        for (int h = 1; h <= i; h++)
        {
            if (h <= fu)
            {
                printf(" ");
            }
            else
            {
                printf("#");
            }
        };
        // Big gap between two parts of pyramid
        printf("  ");
        // Same as else part of h variable
        for (int j = fu; j < i; j++)
        {
            printf("#");
        };
        printf("\n");
    };
};
