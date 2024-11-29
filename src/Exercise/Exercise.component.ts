import { Component, OnInit } from '@angular/core';
import connectRouter from '../connect-router';
declare const require: any;

@Component({
  selector: 'app-Exercise',
  templateUrl: './Exercise.component.html',
  styleUrls: ['./Exercise.component.css'],
})
export class ExerciseComponent implements OnInit {
  ngVersion = require('../../package.json').dependencies['@angular/core'];

  constructor() {
    connectRouter();
  }

  ngOnInit() {}
}
