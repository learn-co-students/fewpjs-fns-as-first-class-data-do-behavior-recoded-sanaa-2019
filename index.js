/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let string=time.split(":");
  let integers=parseInt(string);
  if(integers < 12){
    return "Good Morning";
  }if (integers >=12 && integers<=17) {
    return "Good Afternoon";
  }if (integers>= 18 && integers<=24) {
    return "Good Evening";

  }
}
/* Write your implementation of displayMessage() */
function displayMessage(testContent) {
document.getElementById("greeting").innerText=testContent

}
