import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExerciseComponent } from './Exercise.component';
import { EXERCISE_ROUTES } from './exercise.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(EXERCISE_ROUTES)],
  declarations: [ExerciseComponent],
})
export class ExerciseModule {}
