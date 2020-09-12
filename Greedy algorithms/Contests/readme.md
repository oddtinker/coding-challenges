# Problem: teams

After finishing your studies at HPI, you continue to pursue your CompProg
interests by leading a club for members of all ages. You participate in as many
contests as you can, and, for the best chance of winning, always send your best
team of three. With your years of experience, you can pinpoint someones Comp-
Prog skill on a scale of 1 to 10 000, which makes this rather easy. Should there
still be some ambiguity, you prefer people who have been with the club for longer,
which is indicated by a lower member id. However, many contests have started
using an age restriction, which you need to consider when choosing teams.

## Input

The input begins with a line containing n and c (1 ≤ n, c ≤ 2 · 105), the number of members and contests. The next n lines contain the club members from id 1 to n. Each member consists of a and s (10 ≤ a ≤ 105, 1 ≤ s ≤ 10 000), their age and skill. After that follow c lines that each contain a contest, consisting of a and b (10 ≤ a ≤ b ≤ 105), the minimum and maximum age for participants, both inclusive.

## Output

For each contest, output the ids of the best team of three, ordered by decreasing skill. If there are ties, you prefer members with lower ids. Should no team exists, output a -1.

### Sample input
6 4
21 1000
13 500
24 5000
25 1000
75 8000
30 4000
10 105
13 24
10 23
20 30

### Sample output
5 3 6
3 1 2
-1
3 6 1