import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackExerciseComponent } from './track-exercise.component';

describe('TrackExerciseComponent', () => {
  let component: TrackExerciseComponent;
  let fixture: ComponentFixture<TrackExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrackExerciseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrackExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
