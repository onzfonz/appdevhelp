---
title: Traffic Jam Board
---

# FAQ

## Q: I keep getting exceptions.

<iframe width="560" height="315" src="https://www.youtube.com/embed/x9JArfGJb8c" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>

## Q: My vehicles aren't showing up on the board!

1. Do you understand how 2D arrays work?
  See BASIC JAVA HELP slides to review your understanding of 2D arrays.

2. Have you added vehicles to the board?
    1. Did you set spots on the board to a specific vehicle?

      Very basic example to get you started:
      >     board[0][1] = v[0]

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

## Q: My test cases are returning the incorrect bool!

1. Does your `canMoveNumSpaces()` work properly?
2. Are you updating your vehicle's position on the board?

# Function Specific

## General checklist:
1. Do you understand how vehicles are represented on the board?
  1. See TRAFFIC JAM BOARD HELP (Slide 3).
1. Do you understand how a 2D array works in Java?
  1. See TRAFFIC JAM BOARD HELP (Slide 2).

## canMoveNumSpaces()
1. Checking if the passed in space is null?
2. Grabbing the vehicle at the passed in Space and assigning it to an object?
3. Grabbing the array from spacesOccupiedOnTrail to get the spaces where a vehicle would move?
4. Iterating through an array from spacesOccupiedOnTrail and:
  1. Check out-of-bounds cases?
  2. Check collision with other vehicle cases?

See TRAFFIC JAM BOARD HELP (Slide 4).

## moveNumSpaces()
1. Using canMoveNumSpaces() as a conditional to see whether you should moveNumSpaces()?
2. Grabbing the vehicle at the passed in Space and assigning it to an object?
3. Updating the spaces on the Board itself with the position of the new vehicle?
See TRAFFIC JAM BOARD HELP (Slides 5 – 8).
