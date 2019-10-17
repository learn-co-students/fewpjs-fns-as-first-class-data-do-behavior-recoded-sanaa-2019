/* Given Code, don't edit */

//gets value from input (#time) and stores it in timestring
function handleClick(e) {

  // Selecting the input element and get its value 
  const timeString = document.getElementById('time').value


  displayMessage(greet(timeString)) //need to make this function

  // Displaying the value
  alert(timeString);
}


/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */


function greet(x){   //input must be string HH:MM now it is simply a number (i entered timeString as a string input, now i need to change so it only takes the first 2 numbers)
  var res = x.split(":"); //seperate when it finds : and replace it br , (13:00) to (13,00)
  var final = parseInt(res); //changes string to number (only takes before comma ) (13,00) to (13)
 
  if(final < 12){
  return "Good Morning";
    }
if(final >= 12 && final <= 17){  //17 is 5pm
  return "Good Afternoon";
} 
if( final >= 18 && final <= 24){
  return "Good Evening";
}
}

function displayMessage(output1){
  //alert("Hello, and Good " + output1 +"!");
  document.getElementById("greeting").innerText = output1;


}


    
   
        
  