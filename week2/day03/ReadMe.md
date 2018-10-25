## Homework-Snakes and Ladders Review

### Testing –
#### why has the dice class not been tested?
The dice is chosen randomly through ‘sample’ method and so would be hard to know the expected value as compared to actual. It would always be between a range of just 4 values.

#### Why is all of the 'puts'-ing in one viewer class?

The Viewer class is responsible for the separation of the View from the rest of the model and controller. The ‘puts’ enable a way to output visually the questions and answer to the user in the terminal.  It prevents the rest of the game logic getting tangled up with what is responsible for just the View alone and easier to refactor or modify.

#### Are there any parts you don't understand?
One line or method I was a little unclear of was on validate_movement() in Game class – specifically the line  :
‘movement = spaces > distance_to_end ? distance_to_end : spaces’
‘
