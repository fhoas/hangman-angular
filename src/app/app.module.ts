import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiComponent } from './api/api.component';
import { LettersComponent } from './letters/letters.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, ApiComponent, LettersComponent],
  imports: [BrowserModule, AppRoutingModule, CommonModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
