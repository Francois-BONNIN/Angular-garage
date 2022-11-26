import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-vehicule',
  templateUrl: './card-vehicule.component.html',
  styleUrls: ['./card-vehicule.component.scss']
})
export class CardVehiculeComponent implements OnInit {
  marque = 'Audi';
  modele = 'A3';
  prixjournalier = 20;
  statut = 'Disponible';

  constructor() { }
  // @Input() marque : string | undefined;
  // @Input() modele : string | undefined;
  // @Input() prixjournalier : number | undefined;
  // @Input() statut : string | undefined;


  ngOnInit(): void {
  }

}
