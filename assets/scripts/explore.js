// explore.js

window.addEventListener('DOMContentLoaded', init);

const open = "./assets/images/smiling-open.png";
const close = "./assets/images/smiling.png";

function init() {
  const synth = window.speechSynthesis;
  
  const inputButton = document.querySelector('button');
  const inputTxt = document.querySelector('textarea');
  const voiceSelect = document.querySelector('select');

  const image = document.querySelector('img');
  
  let voices = [];

  synth.addEventListener('voiceschanged', () => {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  });
  
  inputButton.addEventListener('click', function (e) {
    e.preventDefault();
  
    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);
    utterThis.addEventListener('start', function (e) {
      image.src = open;
    });
    utterThis.addEventListener('end', function (e) {
      image.src = close;
    });
  });

}

