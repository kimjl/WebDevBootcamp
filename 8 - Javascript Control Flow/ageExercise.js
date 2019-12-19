var age = Number(prompt('What is your age?'));

if(age < 18) {
    console.log('You cannot enter the venue.');
}
else if(age < 21) {
    console.log('You can enter but cannot drink.');
}
else {
    console.log('You can enter and drink.');
}