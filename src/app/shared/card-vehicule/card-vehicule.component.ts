import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-vehicule',
  templateUrl: './card-vehicule.component.html',
  styleUrls: ['./card-vehicule.component.scss']
})
export class CardVehiculeComponent implements OnInit {
  @Input() marque?: string;
  @Input() modele?: string;
  @Input() prixjournalier?: number;
  @Input() statut?: string;

  constructor() { }
  // @Input() marque : string | undefined;
  // @Input() modele : string | undefined;
  // @Input() prixjournalier : number | undefined;
  // @Input() statut : string | undefined;


  ngOnInit(): void {
  }

}
