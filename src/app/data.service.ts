import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private wordSubject = new BehaviorSubject<string>('example');
  word$ = this.wordSubject.asObservable();

  private letterSubject = new BehaviorSubject<string>('');
  letter$ = this.letterSubject.asObservable();

  setWord(newWord: string): void {
    this.wordSubject.next(newWord);
  }

  setLetter(newLetter: string): void {
    this.letterSubject.next(newLetter);
  }
}