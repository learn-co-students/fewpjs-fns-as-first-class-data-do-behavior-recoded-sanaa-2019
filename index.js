/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
/* Write your implementation of greet() */
function greet(time){
  let a= Number((time.split(":")[0]));
  if(a<12){
    return "Good Morning"
  }
  else if(a>=12&&a<=17){
    return "Good Afternoon"
  }
  else if(a>17){
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(message){
  document.getElementById("greeting").innerText=message;
}