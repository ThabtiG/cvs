import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personne } from '../model/personne';

const API_PERSONNE_ID = "https://immense-citadel-91115.herokuapp.com/api/personnes/";

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes: Personne[];
  constructor(
    private http: HttpClient
  ) {
    this.personnes = [
      new Personne(
        1,
        'sellaouti',
        'aymen',
        'teacher',
        '',
        38,
        2145
      ),
      new Personne(
        2,
        'Bouzid',
        'Badreddine',
        'Analyste',
        'rotating_card_profile2.png',
        41,
        7524
      ),
      new Personne(
        3,
        'Bouzid',
        'Badreddine',
        'Analyste',
        '                ',
        41,
        7524
      ),
    ];
  }
  getPersonnes(): Personne[] {
    return this.personnes;
  }

  findPersonneById(id: number): Personne {
    return this.personnes.find(
      (personne) => personne.id === id
    );
  }

  findPersonneByIdapi(id): Observable<Personne> {
     return this.http.get<Personne>(API_PERSONNE_ID+id);
  }

  deletePersonne(personne: Personne): boolean {
    const index = this.personnes.indexOf(personne);
    if (index === -1) {
      return false;
    } else {
      this.personnes.splice(index, 1);
      return true;
    }
  }
}
