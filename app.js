const countdown = () => {
  const countDate =  new Date('July 7, 2024 00:00:00').getTime;
  const now = new Date().getTime();
  const gap = countDate - now;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const textDays = Math.floor(gap / days);
  const textHours = Math.floor((gap % days) / hours);
  const textMinutes = Math.floor((gap % hours) / minutes);
  const textSeconds = Math.floor((gap % minutes) / seconds);

  

  document.querySelector(".Days").innerText = textDays;
  document.querySelector(".Hours").innerText = textHours;
  document.querySelector(".Minutes").innerText = textMinutes;
  document.querySelector(".Seconds").innerText = textSeconds;


};

setInterval(countdown, 1000);