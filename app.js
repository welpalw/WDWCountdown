function startCountdown() {
  var vacationDateStart= new Date(document.getElementById("dateInput").value);
  var offsetTime = vacationDateStart.getTimezoneOffset();
  console.log(vacationDateStart, offsetTime);
  
//trying to figure out how to store this data so a client doesn't have to re-enter it

  var vacationDateStart = vacationDateStart.getTime() + (offsetTime * 60000);
  var currentDate = new Date().getTime(); 
  //adding line 11 to try and resolve line 6 note
  localStorage.setItem('vacationDateStart', vacationDateStart);
var timeRemaining = vacationDateStart - currentDate;


  const seconds = 1000
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  var textDays = Math.floor(timeRemaining / days);
  var textHours = Math.floor((timeRemaining % days) / hours);
  var textMinutes = Math.floor((timeRemaining % hours) / minutes);
  var textSeconds = Math.floor((timeRemaining % minutes) / seconds); 


  document.getElementById("countdown").innerHTML = textDays + " Days " + textHours + " Hours "
  + textMinutes + " Minutes " + textSeconds + " Seconds ";

}
//adding lines 31-38 to see if this will call the stored date
document.addEventListener('DOMContentLoaded', function() {
  const storedDate = localStorage.getItem('VacationDateStart');
  if (storedDate) {
     document.getElementById('dateInput').value = storedDate;
  }
});

setInterval(startCountdown, 1000);





