/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


/* Write your implementation of greet() */
function greet(timeString){
  if(timeString<"12pm"){
    // console.log("Good Morning");
    return "Good Morning";
  }
if(timeString>"12pm" && timeString<"5pm"){
      // console.log("Good Afternoon");
      return "Good Afternoon";
  }
if(timeString>"5pm"){
      // console.log("Good Evening");
      return "Good Evening";
  }

}
greet();
/* Write your implementation of displayMessage() */

function displayMessage(timeString){
  if (greet(timeString)==="") {
    let testContent = "TEST"
  let content = document.getElementById("greeting");
  content.innerText="testContent";
  }


}
displayMessage();
