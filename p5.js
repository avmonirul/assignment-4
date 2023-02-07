function gemsToDiamond(firstFriend, secondFriend, thirdFriend) {
    let totalFriends = (firstFriend * 21) + (secondFriend * 32) + (thirdFriend * 43);
    if (totalFriends > 2000){
        return totalFriends - 2000;
    }
    else {
        return totalFriends;
    }
}
const input = gemsToDiamond(100,5,1);
console.log(input);