function mindGame(array){

    var negatives = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negatives.push(array[i]);
        }
    }
    return negatives.length;

}
console.log(mindGame([8, -5, 0, 3, -7, 8, 10, -44 ]));