/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}
console.log(andleClick(1))

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
  let spl = time.split(":");
  let pars = parseInt(spl);
console.log(pars)


  if (pars < 12) {
    return "Good Morning";
  }
  else if (pars >= 12 && pars <= 17) { 
    return "Good Afternoon";
  }
  else if (pars >= 18 && pars <= 24) {
    return "Good Evening";
  }

}
/* Write your implementation of displayMessage() */
function displayMessage(e) {
  document.querySelector("#greeting").innerText = e;


}