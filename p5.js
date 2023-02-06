function gemsToDiamond(firstFriend, secondFriend, thirdFriend) {
    let totalFriends = (firstFriend * 21) + (secondFriend * 32) + (thirdFriend * 43);
    if (totalDiamonds > 1000){
        return totalDiamonds - 2000;
    }
    else {
        return totalDiamonds;
    }
}
const input4 = gemsToDiamond(100,5,1);
console.log(input4);