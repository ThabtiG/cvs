import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CvService } from '../services/cv.service';
import { Personne } from './../model/personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  personnes: Personne[] = [];
  @Output() forwardSelectedPersonne = new EventEmitter();
  constructor(
    private cvService: CvService
  ) {}

  ngOnInit(): void {
    this.personnes = this.cvService.getPersonnes();
  }
  forwardPersonne(personne: Personne) {
    this.forwardSelectedPersonne.emit(personne);
  }
}
