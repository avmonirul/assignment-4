function mind_game(array){

    var negatives = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negatives.push(array[i]);
        }
    }
    return negatives.length;

}
console.log(mind_game([8, -5, 0, 3, -7, 8, 10, -44 ]));