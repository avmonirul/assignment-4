function evenOdd(inputString){
    let lenght = inputString.lenght;
    if (lenght % 2 === 0){
        return "chatgpt";
    }
    else{
        return "odd";
    }
}
const input = 'chatgpt';
const result = evenOdd(input);
console.log(result);