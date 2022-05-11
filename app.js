const Mouse = document.getElementById("mouse");
const Start = document.getElementById("start");
const Modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-modal-btn");
const container = document.getElementById("container");
const ModalTime = document.getElementById("modal-time");

GameStart = () => {
  Mouse.classList.remove("mouse-stop");
  Mouse.classList.add("mouse-start");
  Mouse.addEventListener("click", GameEnds);
  start();
};
Start.addEventListener("click", GameStart);

GameEnds = () => {
  Mouse.classList.add("mouse-stop");
  console.log("stop clicked");
  Modal.classList.add("open-modal");
  container.style.opacity = "0.4";
  container.style.pointerEvents = "none";
  // ModalTime.innerHTML = `${hour} Hours:${minute}Mins:${second}Secs`;
  if (hour == 0) {
    ModalTime.innerHTML = `${minute} Minutes:${second} Secs`;
  }
  if (minute == 0) {
    ModalTime.innerHTML = `${second} Seconds`;
  } else {
    ModalTime.innerHTML = `${hour} Hours:${minute} Mins:${second} Secs`;
  }
  pause();
};
closeBtn.addEventListener("click", () => {
  Modal.classList.remove("open-modal");
  container.style.opacity = "1";
  container.style.pointerEvents = "all";
  reset();
});

//

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

function start() {
  pause();
  cron = setInterval(() => {
    timer();
  }, 10);
}

function pause() {
  clearInterval(cron);
}

function reset() {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  document.getElementById("hour").innerText = "00";
  document.getElementById("minute").innerText = "00";
  document.getElementById("second").innerText = "00";
  document.getElementById("millisecond").innerText = "000";
}

function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  document.getElementById("hour").innerText = returnData(hour);
  document.getElementById("minute").innerText = returnData(minute);
  document.getElementById("second").innerText = returnData(second);
  document.getElementById("millisecond").innerText = returnData(millisecond);
}

function returnData(input) {
  return input > 10 ? input : `0${input}`;
}
