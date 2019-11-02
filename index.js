/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
  console.log (timeString);
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
//let timeString="08:40";
function greet(timeString){
  let text;
  let x= timeString.split(":");
  if (x[0]<12 && x[1]>=0){
    text="Good Morning";
  }
  else if (x[0]>12 && x[0]<17 && x[1]>=0){
    text="Good Afternoon";
  }

  else if (x[0]>17 && x[1]>=0){
    text="Good Evening";
  }
return text;

}
//let test= "TEST";

/* Write your implementation of displayMessage() */
function displayMessage(test){
  let text = test;
 //let content = document.getElementById("greeting").innerText
  //content=test; 
  document.getElementById("greeting").innerText=text;
}

      