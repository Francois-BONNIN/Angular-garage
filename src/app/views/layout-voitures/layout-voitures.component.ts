import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-voitures',
  templateUrl: './layout-voitures.component.html',
  styleUrls: ['./layout-voitures.component.scss']
})
export class LayoutVoituresComponent implements OnInit {
  vehicules = [
    {
      marque: 'Renault',
      modele: 'Clio',
      prixjournalier: 17,
      statut: 'Disponible'
    },
    {
      marque: 'Citroen',
      modele: 'C3',
      prixjournalier: 20,
      statut: 'Disponible'
    },
    {
      marque: 'Peugeot',
      modele: '208',
      prixjournalier: 15,
      statut: 'Disponible'
    },
    {
      marque: 'Audi',
      modele: 'A3',
      prixjournalier: 30,
      statut: 'Disponible'
    },
    {
      marque: 'BMW',
      modele: 'Serie 3',
      prixjournalier: 35,
      statut: 'Disponible'
    },
    {
      marque: 'Mercedes',
      modele: 'Classe A',
      prixjournalier: 40,
      statut: 'Disponible'
    },
    {
      marque: 'Volkswagen',
      modele: 'Golf',
      prixjournalier: 25,
      statut: 'Disponible'
    },
    {
      marque: 'Fiat',
      modele: '500',
      prixjournalier: 15,
      statut: 'Disponible'
    },
    {
      marque: 'Ford',
      modele: 'Fiesta',
      prixjournalier: 20,
      statut: 'Disponible'
    },
    {
      marque: 'Toyota',
      modele: 'Yaris',
      prixjournalier: 25,
      statut: 'Disponible'
    },
    {
      marque: 'Kia',
      modele: 'Rio',
      prixjournalier: 20,
      statut: 'Disponible'
    }];

  constructor() { }

  ngOnInit(): void {
  }

}
