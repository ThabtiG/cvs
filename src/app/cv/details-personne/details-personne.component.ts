import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from './../services/cv.service';
import { Personne } from './../model/personne';

@Component({
  selector: 'app-details-personne',
  templateUrl: './details-personne.component.html',
  styleUrls: ['./details-personne.component.css'],
})
export class DetailsPersonneComponent implements OnInit {
  personne: Personne = null;
  /*
    1- Récupérer l'id de la route
    2- Je demande au service la personne d'id id
      2.1 - Si oui je l'affiche
      2.2 - Si non le rediriger vers le CVComponent
  */
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.cvService.findPersonneByIdapi(+params.id).subscribe(
        personne =>  {this.personne = personne;},
        (erreur) => this.router.navigate(['cv'])
      );
    });
  }

  delete() {
    /*
      1- Appelle le service et je lui demande de supprimer l'objet personne
      2- le rediriger vers le CVComponent
    */
    this.cvService.deletePersonne(this.personne);
    this.router.navigate(['cv']);
  }
}
