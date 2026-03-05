# Sprint 8 - Stretch Goal: Rock Paper Scissors Game

Build a complete Rock Paper Scissors game with the following features:

## Requirements

1. **Player vs Computer**: Player chooses rock, paper, or scissors
2. **Computer AI**: Computer makes a random choice
3. **Game Logic**: Determine winner based on rules:
   - Rock beats Scissors
   - Scissors beats Paper
   - Paper beats Rock
   - Same choice = Tie
4. **Score Tracking**: Keep track of wins, losses, and ties
5. **Best of Series**: Play best of 3, 5, or unlimited rounds
6. **Game History**: Display last 5 game results

## Technical Specifications

- Use switch or if-else for game logic
- Random computer choice using Math.random()
- Store game state in an object
- Display results dynamically in the DOM
- Reset functionality to start a new game

## Bonus Features

- Add "best 2 out of 3" tournament mode
- Add sound effects
- Animate the choices
- Add difficulty levels (easy computer, hard computer that learns patterns)
- Show statistics (win percentage, most used choice)

## Files to Create

1. `rock-paper-scissors.html` - Game interface
2. `rock-paper-scissors.css` - Styling
3. `rock-paper-scissors.js` - Game logic

## Sample Game State

```javascript
const gameState = {
  playerScore: 0,
  computerScore: 0,
  ties: 0,
  history: [],
  round: 1
};
```

## Expected Functionality

- Clear visual feedback for each round
- Smooth transitions and animations
- Persistent score across rounds
- Clean reset functionality

This exercise combines control flow, randomness, DOM manipulation, and state management!
