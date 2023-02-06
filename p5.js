function gemsToDiamond(firstFriend,secondFriend,thirdFriend){
    let totalFriends = (firstFriend * 21) + (secondFriend * 32) + (thirdFriend * 43);
    if (totalDiamond > 1000){
        return totalDiamond - 2000;
    }
    else {
        return totalDiamond;
    }
}
const input4 = gemsToDiamond(100,5,1);
console.log(input4);