/**
 * Created by ivan.datsiv on 12/1/2015.
 */
var i = 5;

var arr = new Array(i);

for(var j = 0; i > 0; j++){
    arr[j] = prompt("Enter Name", "Name");
    --i;
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