"use-strict";

const hourhand = document.querySelector("[data-hour-hand]");
const minutehand = document.querySelector("[data-minute-hand]");
const secondhand = document.querySelector("[ data-second-hand]");

function setclock() {
  const currentdate = new Date();
  const sratio = currentdate.getSeconds() / 60;
  const mratio = (sratio + currentdate.getMinutes()) / 60;
  const hratio = (mratio + currentdate.getHours()) / 12;
  setRotation(secondhand, sratio);
  setRotation(minutehand, mratio);
  setRotation(hourhand, hratio);
}

function setRotation(elememt, rotationRatio) {
  elememt.style.setProperty("--rotation", rotationRatio * 360);
}

setclock();
setInterval(setclock, 1000);
