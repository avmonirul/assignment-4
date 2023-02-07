function mindGame(inputNumber){
    let sterTech = inputNumber * 3;
        sterTech = sterTech + 10;
        sterTech = sterTech / 2;
        sterTech = sterTech - 5;
        return sterTech;
}

function evenOdd(inputString){
    let lenght = inputString.lenght;
    if (lenght % 2 === 0){
        return "chatgpt";
    }
    else{
        return "odd";
    }
}

function isLGSeven(inputNumber){
    let difference = (inputNumber - 7)
    if (difference < 7){
        return difference;
    }
    else {
        return 2 * difference;
    }
}

function mindGame(array){

    var negatives = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negatives.push(array[i]);
        }
    }
    return negatives.length;

}

function gemsToDiamond(firstFriend, secondFriend, thirdFriend) {
    let totalFriends = (firstFriend * 21) + (secondFriend * 32) + (thirdFriend * 43);
    if (totalFriends > 2000){
        return totalFriends - 2000;
    }
    else {
        return totalFriends;
    }
}