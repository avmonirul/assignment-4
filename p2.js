function evenOdd(inputString){
    let lenght = inputString.lenght;
    if (lenght % 2 === 0){
        return "even";
    }
    else{
        return "odd";
    }
}
const input = 'even';
const result = evenOdd(input);
console.log(result);