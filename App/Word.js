import { dataQuotes } from '../Data/dataQuotes.js';

const CATEFORY_WRAPPER_ID = 'category';

class Word {
  constructor() {
    this._currentWord =  null;
    this._currentCategory = null;
    this.guessed = [];

    this.getCurrentWord = () => this._currentWord;
    this.setCurrentWord = word => this._currentWord = word;
    this.getCurrentCategory = () => this._currentCategory;
    this.setCurrentCategory = category => this._currentCategory = category;
  }

  contentHandler = () => {
    const number = Math.floor(Math.random() * dataQuotes.length);
    const {category, word} = dataQuotes[number];
    this.setCurrentWord(word);
    this.setCurrentCategory(category);

    const categoryWrapper = document.getElementById(CATEFORY_WRAPPER_ID);
    categoryWrapper.textContent = category;
  }

  getContent = () => {
    let content = '';
    for(const char of this.getCurrentWord()) {
      if(char === ' ' || this.guessed.includes(char)) {
        content += char;
      } else {
        content += '_';
      }
    }
    return content;
  }
}

export const word = new Word();