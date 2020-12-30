import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css'],
})
export class FilsComponent implements OnInit {
  /*
  1- Créer un evenement
  */
  @Output() sendMessageToPapa = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  envoyerMessageAMonPere() {
    this.sendMessageToPapa.emit('Salam');
  }
}
