---
title: Traffic Jam Space & Vehicle
---

# FAQ

## Q: I'm having trouble creating an array!

1. Did you declare a Location array object?
2. Did you use the keyword new to instantiate the Location array?

>     arrayRefVar = new dataType[arraySize];

## Q: I keep getting an ArrayOutOfBoundsException.

1. Are you accessing something outside of the array bounds?

<iframe width="560" height="315" src="https://www.youtube.com/embed/x9JArfGJb8c?start=869" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>

## Q: I keep getting a NullPointerException.

1. Are you instantiating an object?

The following produces an error:
>     Vehicle v;
>     v.getStart();

Correct way:
>     Vehicle v = new Vehicle(1, 0);
>     v.getStart();

<iframe width="560" height="315" src="https://www.youtube.com/embed/x9JArfGJb8c" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>

# Function Specific

## locationsOn()

1. Have you created an array of Locations?
    1. Did you declare a Location array object?
    2. Did you use the keyword new to instantiate the Location array?
    See BASIC JAVA HELP slides for more help.

2. Have you checked a vehicle’s orientation?
    1. If a vehicle is vertical, that means you want to count along the rows.
    2. If a vehicle is horizontal, you want to count along the columns.
    See BASIC TRAFFIC JAM HELP (Slide 5) for more help.

3. Are you returning an array of Locations?

## locationsPath()

1.	Do you understand what a vehicle is in this project?
See BASIC TRAFFIC JAM HELP (Slide 1) for more help.

2. Have you declared a new temporary Vehicle object?
3. Have you checked the vehicle’s orientation?
4. Are you iterating through and building an array of Locations that a vehicle would travel on?
5. Remember to use the head of the car if you’re moving in the positive direction or the tail of the vehicle if you’re moving with negative number of spaces.
6. Are you returning an array of Locations containing the locations the vehicle would forge a path through?

## move()

1. Are you updating the Start position of the vehicle based on the number of spaces moved?
See BASIC TRAFFIC JAM HELP (Slide 4) for more help. 
