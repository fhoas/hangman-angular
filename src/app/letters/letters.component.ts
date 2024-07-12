import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.scss'],
})
export class LettersComponent implements OnInit {
  @Input() selectedLetters: string[] = [];
  gameOver: boolean = false;
  letters: string[] = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  constructor(private dataService: DataService) {}

  onClick(letter: string): void {
    if (!this.selectedLetters.includes(letter) && !this.gameOver) {
      this.selectedLetters.push(letter);
      this.dataService.setLetter(letter);
    }
  }

  ngOnInit(): void {}
}
