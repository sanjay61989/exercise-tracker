import { Routes } from '@angular/router';
import { EmptyComponent } from '../app/empty/empty.component';
import { ExerciseReportsComponent } from './exercise-reports/exercise-reports.component';
import { TrackExerciseComponent } from './track-exercise/track-exercise.component';

export const EXERCISE_ROUTES: Routes = [
  {
    path: '',
    children: [
      { path: 'track', component: TrackExerciseComponent },
      { path: 'reports', component: ExerciseReportsComponent },
      {
        path: '',
        redirectTo: 'track',
        pathMatch: 'full',
      },
    ],
  },
  { path: '**', component: EmptyComponent },
];
