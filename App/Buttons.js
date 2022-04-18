import { game } from "./Game.js";

const LETTER_WRAPPER_ID = 'letters';

class Buttons {
  createButtons = () => {
    for(let i = 10; i < 36; i++) {
      const letter = (i).toString(36);
      const letterWrapper = document.getElementById(LETTER_WRAPPER_ID);
      
      const button = document.createElement('button');
      button.textContent = letter;
      button.addEventListener('click', e => game.clickGameHandler(e, letter))
      letterWrapper.appendChild(button);
    }
  }
}

export const buttons = new Buttons();