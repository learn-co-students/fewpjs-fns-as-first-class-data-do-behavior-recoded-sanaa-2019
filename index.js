/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
let hour=time.split(":");
let intHour=parseInt(hour);
if (intHour<12){
  return "Good Morning";
}
else if(intHour>=12&&intHour<=17)
{
  return "Good Afternoon";
}
else if(intHour>=18)
return "Good Evening";
}
/* Write your implementation of displayMessage() */
function displayMessage(text){
  document.getElementById("greeting").innerText=text;

}