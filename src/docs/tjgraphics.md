---
title: Traffic Jam Graphics
---

# FAQ

## Q: My grid lines/vehicles/winning space aren't visible.

1. Have you added the GImage/GLine to the GraphicsProgram?
>     add(vehicle);

## Q: I added my vehicle to the board but they still aren't appearing.

1. Did you place the vehicle in the correct spot?

Remember that x and y are coordinates on the grid, so you'll have to convert the Vehicle's starting row and column.   
>     GImage img = new GImage(name, x, y)

## Q: Everything on my board is facing the opposite direction.

1. Have you converted XY coordinates to spaces on the board?
2. Remember that for the graphics, Row corresponds to Y and Col corresponds to X.

## Q: My vehicles are too small.

1. Did you scale the vehicles up by using the size of a tile on the grid?

## Q: My mouse actions aren't working.

1. Did you remember to `addMouseListeners()`?

## Q: My vehicle isn't dragging or moving at all.

1. Review the ACM & Interactivity Labs. The movement is very similar here.

## Q: I'm moving my vehicle to the winning space, but it isn't working!

1. When you move your vehicle on the graphics portion, don't forget that you must also move the corresponding vehicle in the Board.

Example: You move your horizontal vehicle, whose head is on (Row 2, Col 0) two grid spaces to the right. Each grid tile is 100px in width, so you've moved the image of that vehicle 200px. On the Board, where should that vehicle's head be now?

>     Answer: Row 2, Col 2

# General Checklist for Graphics

1. Are your grid lines even?
2. Did you compute the width and height of a single grid square?
3. Did you add the GLine so it can be rendered?
4. Did you scale and position your vehicles correctly?
5. Did you compute the width and height of a single grid square?
6. Did you use those computations and the vehicle’s start position to scale/position the vehicle?
7. Are you adding images to the canvas? (i.e. using the keyword add)

# MouseListeners

## MousePressed
1. Does your mousePressed grab the element at that position?
2. Are you grabbing and storing the Vehicle object?
3. Are you leveraging getVehicleFromXY()?

## MouseDragged
1. Are you constantly saving the cursor’s old position as you drag the image?
2. Are you making sure that whatever you’re dragging isn’t null?
3. Are you updating the image’s position as you drag it?

## MouseReleased
1. Are you leveraging moveNumSpaces to see if a vehicle’s movement is valid?
2. Are you updating the vehicle’s location based on whether the movement is valid or not?
