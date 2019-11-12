/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}
function greet(e){
  let u=e.split(":")
  if(parseInt(u[0])<12){return "Good Morning";}
  else if(parseInt(u[0])>=12 && parseInt(u[0])<=17){return "Good Afternoon";}
  else {return "Good Evening";}
  
}
function displayMessage(mess){
  let mes= document.getElementById("greeting");
     mes.textContant= mess;
}
displayMessage("cool")
/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
