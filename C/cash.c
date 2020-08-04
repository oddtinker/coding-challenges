#include <stdio.h>
#include <cs50.h>
#include <math.h>

int main(void)
{
    // Input request loops until positive number given
    float ch;
    do
    {
        ch = get_float("Change owed: ");
    }
    while (ch <= 0);
    
    // Convert inputted dollars to cents
    int cents = round(ch * 100);
    
    // Declare coins value to hold future amount of coins
    int coins = 0;
    
    // Substract 25 from coins until quarter becomes too big a denomination;
    // Save and update the value of coins variable
    while (cents - 25 >= 0)
    {
        cents = cents - 25;
        coins++;
    };

    // Repeat with dimes
    while (cents - 10 >= 0)
    {
        cents = cents - 10;
        coins++;
    };
    
    // Repeat with nickels
    while (cents - 5 >= 0)
    {
        cents = cents - 5;
        coins++;
    };
    
    // Repeat with pennies
    while (cents - 1 >= 0)
    {
        cents = cents - 1;
        coins++;
    };
   
    // Print out the number of coins for change
    printf("%i\n", coins);
};
