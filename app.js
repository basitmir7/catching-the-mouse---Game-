const Mouse = document.getElementById("mouse");
const Start = document.getElementById("start");
const Modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-modal-btn");
const container = document.getElementById("container");
const ModalTime = document.getElementById("modal-time");
const gameBody = document.getElementById("gameBody");
var easy = document.getElementById("easy");
var medium = document.getElementById("medium");
var hard = document.getElementById("hard");
var interval = null;
let num = 1000;

//close window button function
document.getElementById("close-window").addEventListener("click", () => {
  window.close();
});

//onload function
window.onload = () => {
  easy.addEventListener("focus", () => {
    console.log("easy focus in on");
    num = 1100;
    console.log(num);
  });
  medium.addEventListener("focus", () => {
    console.log("medium focus in on");
    num = 740;
    console.log(num);
  });
  hard.addEventListener("focus", () => {
    num = 290;
    console.log(num);
  });
};

//function to mov the mouse  randomly

startMouse = () => {
  interval = setInterval(() => {
    console.log("mouse is moving");
    Mouse.style.left = Math.floor(Math.random() * 100 + 1) + "%";
    Mouse.style.top = Math.floor(Math.random() * 100 + 1) + "%";
  }, num);

  Mouse.addEventListener("click", GameEnds);
};
//function to stopr the mouse
stopMouse = () => {
  console.log("canceleed inter");
  clearInterval(interval);
  gameBody.style.pointerEvents = "none";
};

//Game start function
GameStart = () => {
  gameBody.style.pointerEvents = "all";
  Mouse.classList.remove("mouse-stop");

  startMouse();

  start();
};
Start.addEventListener("click", GameStart);

//Game ends function on clicking the mouse
GameEnds = () => {
  stopMouse();
  console.log("stop clicked");
  Modal.classList.add("open-modal");
  container.style.opacity = "0.4";
  container.style.pointerEvents = "none";

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

//Timer functions

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
