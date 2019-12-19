function isEven(num) {
    if(num%2==0) {
        return true;
    }
    else {
        return false;
    }
}

function factorial(num) {
    if(num < 0) {
        return -1;
    }
    else if(num==0) {
        return 1;
    }
    else {
        return num * factorial(num-1);
    }

    //OR
    // result = num;
    // if(num==0 || num==1) {
    //     return 1;
    // }
    // while(num>1) {
    //     num--;
    //     result *= num
    // }

}

function kebabToSnake(word) {
    return word.replace(/-/g,'_')
}

