import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'hangman';
  randomWord: string = '';
  letter: string = '';
  hiddenWord: string[] = [];
  wrongLettersCount: number = 0;
  correctLettersCount: number = 0;
  showLoseModal: boolean = false;
  showWinModal: boolean = false;
  gameOver: boolean = false;
  selectedLetters: string[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.word$.subscribe((word) => {
      this.randomWord = word.toLowerCase();
      this.initializeHiddenWord();
    });

    this.dataService.letter$.subscribe((letter) => {
      this.letter = letter;
      this.checkLetterInWord();
    });
  }

  initializeHiddenWord(): void {
    this.hiddenWord = Array(this.randomWord.length).fill('_');
  }

  checkLetterInWord(): void {
    const letter = this.letter.toLowerCase();
    if (this.wrongLettersCount < 10) {
      if (this.correctLettersCount < this.randomWord.length) {
        if (this.randomWord.includes(letter)) {
          for (let i = 0; i < this.randomWord.length; i++) {
            if (this.randomWord[i] === letter) {
              this.correctLettersCount++;
              this.hiddenWord[i] = this.randomWord[i];
            }
          }
        } else {
          this.wrongLettersCount++;
        }
      }
      this.updateGameStatus();
    }
  }

  updateGameStatus(): void {
    if (this.correctLettersCount === this.randomWord.length) {
      this.showWinModal = true;
    } else if (this.wrongLettersCount >= 10) {
      this.showLoseModal = true;
      this.gameOver = true;
    }
  }

  playAgain(): void {
    this.showWinModal = false;
    this.showLoseModal = false;
    this.gameOver = false;
    this.wrongLettersCount = 0;
    this.correctLettersCount = 0;
    this.randomWord = '';
    this.hiddenWord = [];
    this.selectedLetters = [];
    this.dataService.setWord('example');
  }
}
