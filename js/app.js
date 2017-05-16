
var count = 1;
var users = [];

document.getElementById('clickMe').onclick = function (){ reguisterUser()};

function reguisterUser (){
  var userName = document.getElementById('newName').value;
  var userPsd = document.getElementById('newPwd').value;
  console.log("New User: "+userName);
  console.log("New Password: " + userPsd);

  if ((userName && userPsd) != ""){
    //create list
    users.push({name: userName, pswd: userPsd})
    console.log(users);

    //delete content after pushing the button
    document.getElementById('newName').value = "";
    document.getElementById('newPwd').value = "";

    alert("Congratulations"+ "! You are now Registered")

    return count++;
  }
return
}


document.getElementById('clickMe2').onclick = function (){ loginUser()};

function loginUser (){
  var oldName = document.getElementById('oldName').value;
  var oldPsd = document.getElementById('oldPwd').value;


  for (var i = 0; i < users.length; i++) {

  if ((oldName && oldPsd) != ""){
      if ((oldName === users[i].name) && (oldPsd === users[i].pswd) ) {
        console.log( oldName + "," + oldPsd);
        alert("Welcome Back!")
        return
      }
   }
 }
}
