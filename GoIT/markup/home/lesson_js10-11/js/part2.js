/**
 * Created by ivan.datsiv on 12/1/2015.
 */
var arr = [];

for(var i = 0; i < 5; i++){
    arr[i] = prompt("Enter Name", "Name");
}

var userName = prompt("Enter you Name", "You Name");

var flagCorrectUser = false;

for(var k = 0; k < 5; k++){
    if(arr[k] == userName){
        flagCorrectUser = true;
    }
}

if(flagCorrectUser == false){
    alert("Користувача не існує!");
} else {
    alert(userName +", ви успішно зайшли:)");
}