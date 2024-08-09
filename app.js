const dateInput = document.getElementById("dateInput");

function startCountdown() {

  const dateValue = dateInput.value;
  var vacationDateStart = new Date(dateValue);
  var offsetTime = vacationDateStart.getTimezoneOffset();

  var vacationDateStart = vacationDateStart.getTime() + (offsetTime * 60000);
  localStorage.setItem('vacationDateStart', vacationDateStart);

  var currentDate = new Date().getTime(); 

  //adding line 11 to try and resolve line 6 now
  var timeRemaining = vacationDateStart - currentDate;

  const seconds = 1000
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  var textDays = Math.floor(timeRemaining / days);
  var textHours = Math.floor((timeRemaining % days) / hours);
  var textMinutes = Math.floor((timeRemaining % hours) / minutes);
  var textSeconds = Math.floor((timeRemaining % minutes) / seconds); 
  
  if (isNaN(textDays)) {
    document.getElementById("countdown").innerHTML = 'Please enter a valid date!'
  } else {
    document.getElementById("countdown").innerHTML = textDays + " Days " + textHours + " Hours "
    + textMinutes + " Minutes " + textSeconds + " Seconds ";
  }

}

const storedTimestamp = localStorage.getItem("vacationDateStart");

let interval;

if (storedTimestamp !== null) {
  const dateNotFormatted = new Date(parseInt(storedTimestamp));

  let formatted_string = dateNotFormatted.getFullYear();
  formatted_string += "-";

  if (dateNotFormatted.getMonth() < 9) {
    formatted_string += "0";
  }

  formatted_string += (dateNotFormatted.getMonth() + 1);
  formatted_string += "-";

  if(dateNotFormatted.getDate() < 10) {
    formatted_string += "0";
  }

  formatted_string += dateNotFormatted.getDate();

  dateInput.value = formatted_string;

  setInterval(startCountdown, 1000);
} else {

  dateInput.onclick = () => {

    if(interval) {
      interval.clearInterval();
    }

    interval = setInterval(startCountdown, 1000);
  }
}
