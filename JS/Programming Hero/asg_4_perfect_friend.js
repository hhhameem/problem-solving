//write a function to find out your perfect friend

function perfectFriend(friendName){
    for (let name of friendName) {
        if (typeof name == "number") {
            return "Please input a string";
        }
        if(name.length == 5){
            return name;
        }
    }
}

var friendName = ['Foiz','Mouri','Faisal','Mehjabin'];
var myFriend = perfectFriend(friendName);
console.log(myFriend);