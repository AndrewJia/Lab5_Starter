// expose.js

window.addEventListener('DOMContentLoaded', init);

const airsound = "./assets/audio/air-horn.mp3";
const carsound = "./assets/audio/car-horn.mp3";
const partysound = "./assets/audio/party-horn.mp3";

const airhorn = "./assets/images/air-horn.svg";
const carhorn = "./assets/images/car-horn.svg";
const partyhorn = "./assets/images/party-horn.svg";

const vol0 = "./assets/icons/volume-level-0.svg";
const vol1 = "./assets/icons/volume-level-1.svg";
const vol2 = "./assets/icons/volume-level-2.svg";
const vol3 = "./assets/icons/volume-level-3.svg";

function init() {
  //horn select
  const hornimg = document.querySelector("#expose > img");
  const select = document.getElementById('horn-select');
  select.addEventListener('change', function (e) {
    console.log(e.target.value);
    if(e.target.value == 'air-horn') {
      hornimg.src = airhorn;
      hornimg.alt = "air horn image";
    } else if (e.target.value == 'car-horn') {
      hornimg.src = carhorn;
      hornimg.alt = "car horn image";
    } else if (e.target.value == 'party-horn') {
      hornimg.src = partyhorn;
      hornimg.alt = "party horn image";
    } else {
      console.log("invalid horn selected?");
    }
  });
  
  //volume and sound icon slider
  const range = document.querySelector("#volume-controls > input");
  const soundicon = document.querySelector("#volume-controls > img");
  range.addEventListener('change', function (e) {
    console.log(e.target.value);
    if(e.target.value == 0) {
      soundicon.src = vol0;
      soundicon.alt = "Volume level 0";
    } else if(e.target.value < 33) {
      soundicon.src = vol1;
      soundicon.alt = "Volume level 1";
    } else if(e.target.value < 67) {
      soundicon.src = vol2;
      soundicon.alt = "Volume level 2";
    } else {
      soundicon.src = vol3;
      soundicon.alt = "Volume level 3";
    }
  });
}