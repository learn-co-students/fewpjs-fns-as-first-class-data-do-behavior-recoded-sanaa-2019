/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}
/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time)
{
  
  let hour= time.split(":");
  let intHour=parseInt(hour);
  
  if(intHour<12)
  {
    return "Good Morning";
  }
 
  else if(intHour >= 12 && intHour < 18)
  {
    return "Good Afternoon";
  }
  else if(intHour > 17 && intHour < 24)
  {
    return "Good Evening";
  }
 
}
/* Write your implementation of displayMessage() */
  function displayMessage(msg)
  {
    document.querySelector("#greeting").innerText = msg; 
  }
