var count1 = -10;
while(count1 <= 19) {
    console.log(count1);
    count1++;
}
console.log('End of problem 1');

var count2 = 10;
while(count2 <= 40) {
    console.log(count2);
    count2+=2;
}
console.log('End of problem 2');

var count3 = 300;
while(count3 <= 333) {
    if(count3%2==1) {
        console.log(count3);
    }
    count3+=1;
}
console.log('End of problem 3');

var count4 = 5;
while(count4 <= 50) {
    if(count4%3==0 && count4%5==0) {
        console.log(count4);
    }
    // else if(count4%3==0) {
    //     console.log(count4);
    // }
    // else if(count4%5==0) {
    //     console.log(count4);
    // }
    count4+=1;
}