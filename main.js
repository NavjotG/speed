// Caught Speeding CYU Asgn

// IPO
document.getElementById("button").addEventListener("click", speedCheck);

function speedCheck() {
  // Input
  let driverSpeed = +document.getElementById("dSpeed").value;

  let speedLimit = +document.getElementById("speedL").value;

  let ticket = document.getElementById("output");

  // Process
  if (driverSpeed - speedLimit >= 20) {
    ticket.innerHTML = "Big Ticket";
  } else if (driverSpeed - speedLimit < 20 && driverSpeed - speedLimit > 5) {
    ticket.innerHTML = "Small Ticket";
  } else {
    ticket.innerHTML = "No Ticket";
  }
}
