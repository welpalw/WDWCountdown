function startCountdown() {
  var vacationDateStart= new Date(document.getElementById("dateInput").value);
  var offsetTime = vacationDateStart.getTimezoneOffset();
  console.log(vacationDateStart, offsetTime);

  var vacationDateStart = vacationDateStart.getTime() + (offsetTime * 60000);
  var currentDate = new Date().getTime(); 

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

setInterval(startCountdown, 1000);



