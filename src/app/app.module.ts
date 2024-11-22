import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ExerciseModule } from '../Exercise/Exercise.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ExerciseModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
