import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ExerciseReportsComponent } from '../Exercise/exercise-reports/exercise-reports.component';
import { ExerciseModule } from '../Exercise/Exercise.module';
import { TrackExerciseComponent } from '../Exercise/track-exercise/track-exercise.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyComponent } from './empty/empty.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackExerciseComponent,
    ExerciseReportsComponent,
    EmptyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ExerciseModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
