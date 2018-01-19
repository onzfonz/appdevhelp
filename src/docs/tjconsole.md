---
title: Traffic Jam Console
---

# FAQ

## Q: My vehicles aren't showing up on the board!

1. Do you understand how 2D arrays work?
  See BASIC JAVA HELP slides to review your understanding of 2D arrays.

2. Do you understand what the Level class is supposed to do?
  See TRAFFIC JAM CONSOLE GAME HELP.

3. Have you created a Board object in Level?

3. Have you added vehicles to the board?

## Q: Part of my vehicle is cut off on the board!

1. Is your vehicle's length exceeding the boundaries of the board?

Depending on how you're adding vehicles to the board, you may be getting an ArrayOutOfBoundsException.

Example 1: You declare your Board size to be 6 by 6 and a vertical vehicle of length 2 at 5, 5 (row 5, col 5).

What spaces would vehicle occupy?
>     Answer: [5][5] and [6][5]
>     Error: The Board size is [6][6], meaning that both indices only go from 0 to 5.

2. Did you make your board too small?

>     A board that is size [6][6] will have indices ranging from 0 to 5.

## Q: My horizontal vehicle is showing up as vertical! (or vice versa)

1. When creating a vehicle object, did you pass in the correct value for the vehicle's orientation?

If your vehicle constructor looks like this:
>     Vehicle(int srow, int scol, int length, bool vertical, VehicleType type)

Then your parameters must be passed in that order:
>     Vehicle v = new Vehicle(0, 0, 2, true, VehicleType.CAR)

## Q: My vehicle isn't moving at all.

1. Does your `moveNumSpaces()` function work?
2. In your vehicle class, do you have a `move()` function?
3. Are you updating your vehicle's position on the board?
4. In your `Console` class, have you:
    1. Created a Level object?
    2. Passed in the size of the Board?
    3. Looping through and taking the user's input?

# General checklist:
1. Do you understand how Level works as a middle man?
2. See TRAFFIC JAM CONSOLE GAME HELP.
3. Are you instantiating a board?
4. Adding vehicles to the Board?
5. Adding a winning space to the board?
6. Added a check for a vehicle landing on the spot?
7. Implemented a way to add vehicles to an ArrayList?
