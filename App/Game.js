import { buttons } from "./Buttons.js";
import { word } from "./Word.js";

class Game {
  constructor({wordWrapper, lettersWrapper}) {
    this.wordWrapper = wordWrapper;
    this.lettersWrapper = lettersWrapper;
    this.currentStep = 0;
    this.numberOfSteps = 8;
    
    this.startGame();
  }

  startGame = () => {
    document.querySelectorAll('.step')[this.currentStep].style.opacity = 1;
    buttons.createButtons();
    word.contentHandler();

    const content = word.getContent();
    this.wordWrapper.innerHTML = content;
  }

  clickGameHandler = (e, letter) => {
    e.target.disabled = true;
    this.guessLetter(letter);
    
    const content = word.getContent();
    this.wordWrapper.innerHTML = content;
    this.checkEndGame();
  }

  guessLetter = letter => {
    const currentWord = word.getCurrentWord();

    if(!currentWord.includes(letter)) {
      this.currentStep++;
      document.querySelectorAll('.step')[this.currentStep].style.opacity = 1;
    } 

    word.guessed.push(letter);
  }

  checkEndGame = () => {
    if(this.currentStep === this.numberOfSteps - 1) {
      this.wordWrapper.textContent = 'Ups, starciłeś wszystkie szanse :(';
      this.lettersWrapper.textContent = '';
    }

    if(!word.getContent().includes('_')) {
      this.wordWrapper.textContent = 'Gratulacje, wygrałeś rundę!!!';
      this.lettersWrapper.textContent = '';
    }
    return
  }
}

export const game = new Game({
  lettersWrapper: document.getElementById('letters'),
  wordWrapper: document.getElementById('word'),
});