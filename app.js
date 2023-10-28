const choices = ['Rock', 'Paper', 'Scissors'];

const playerChoice = Math.floor(Math.random() * 3);
const computerChoice = Math.floor(Math.random() * 3);

console.log('Player selected: ' + choices[playerChoice]);
console.log('Computer selected: ' + choices[computerChoice]);

if (playerChoice === computerChoice) {
  console.log('It\'s a tie!');
} else if (
  (playerChoice === 0 && computerChoice === 2) || 
  (playerChoice === 1 && computerChoice === 0) || 
  (playerChoice === 2 && computerChoice === 1)    
) {
  console.log('You win!');
} else {
  console.log('Computer wins!');
}
