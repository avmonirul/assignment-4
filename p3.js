function isLGSeven(inputNumber){
    let difference = (inputNumber - 7)
    if (difference < 7){
        return difference;
    }
    else {
        return 2 * difference;
    }
}
const result1 = isLGSeven(6);
console.log(result1);