import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseReportsComponent } from './exercise-reports.component';

describe('ExerciseReportsComponent', () => {
  let component: ExerciseReportsComponent;
  let fixture: ComponentFixture<ExerciseReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExerciseReportsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExerciseReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
