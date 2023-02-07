function mindGame(inputNumber){
    let sterTech = inputNumber * 3;
        sterTech = sterTech + 10;
        sterTech = sterTech / 2;
        sterTech = sterTech - 5;
        return sterTech;
}
const input = 5;
const tech = mindGame(input);
console.log(tech);