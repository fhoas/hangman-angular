import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-api',
  template: ``,
})
export class ApiComponent implements OnInit {
  randomWord: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchRandomWord();
  }

  fetchRandomWord(): void {
    fetch('https://random-word-api.herokuapp.com/word')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          this.randomWord = data[0];
          this.dataService.setWord(this.randomWord);
        } else {
          console.error('Unexpected response format', data);
        }
      })
      .catch((error) => console.error('Error fetching random word:', error));
  }
}