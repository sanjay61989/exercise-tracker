import { NgZone } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { ExerciseComponent } from './Exercise.component';
import { EXERCISE_ROUTES } from './exercise.routes';

(async () => {
  const app = await createApplication({
    providers: [
      globalThis.ngZone ? { provide: NgZone, useValue: globalThis.ngZone } : [],
      provideRouter(EXERCISE_ROUTES),
    ],
  });

  const mfe3Root = createCustomElement(ExerciseComponent, {
    injector: app.injector,
  });

  customElements.define('mfe3-root', mfe3Root);
})();
