

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(time) {
  time = time.split(":");
  time = parseInt(time , 10);

  if (time < 12 ) {
    return "Good Morning";
  }
  if (time >= 12 && time < 17){

    return "Good Afternoon";
  }
  if (time >= 17 && time < 24){
    return "Good Evening";
  }
  
}

  
/* Write your implementation of displayMessage() */
function displayMessage(greet){
  const element = document.getElementById('greeting');
  element.innerText=greet;
  
}