var secretNumber = 7;

var guess = Number(prompt('Guess a number'))

if(guess===secretNumber) {
    alert('You guessed correctly');
}
else if(guess < secretNumber) {
    alert('Your guess is too low');
}
else {
    alert('Your guess is too high');
}