import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  couleur = 'red';
  isHidden = false;
  message = '';
  constructor() {}
  changeColor() {
    this.couleur = 'blue';
  }
  ngOnInit(): void {}

  afficherCacher() {
    this.isHidden = !this.isHidden;
  }
  afficher(text: string) {
    this.message = text;
  }
}
