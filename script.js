let time = 60;
const counter = document.getElementById("counter");

setInterval(() => {
  time--;
  if (time <= 0) time = 60;
  counter.textContent = time;
}, 1000);
