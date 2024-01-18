import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Exercice1Component } from './exercice-1/exercice-1.component';
import { ColorDirective } from './exercice-1/color.directive';

@NgModule({
  declarations: [AppComponent, ColorDirective, Exercice1Component],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
