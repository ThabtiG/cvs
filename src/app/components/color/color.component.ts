import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  @Input() defaultColor = 'lightblue';
  color = this.defaultColor;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((mesParametres) => {
      this.defaultColor = mesParametres.couleur;
      this.color = this.defaultColor;
    });
  }
  changeColor(newColor: string) {
    this.color = newColor;
  }
  goToTodo() {
    this.router.navigate(['todo']);
  }
}
