import {Statut} from "../enums/statut";

export interface VehiculeI {
  id: number;
  marque: string;
  modele: string;
  kilometrage: number;
  prixjournalier: number;
  statut: Statut;
}
