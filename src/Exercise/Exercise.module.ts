import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseComponent } from './Exercise.component';

const routes: Routes = [{ path: '', component: ExerciseComponent }];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [ExerciseComponent],
})
export class ExerciseModule {}
