import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css'],
})
export class WordComponent implements OnInit {
  color = 'yellow';
  font = 'times';
  size = 75;
  constructor() {}

  ngOnInit(): void {}
}
