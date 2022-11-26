import {Statut} from "../enums/statut";
import {VehiculeI} from "../interfaces/vehicule";

export class Vehicule implements VehiculeI {
  id: number | undefined;
  marque: string | undefined;
  modele: string | undefined;
  kilometrage: number | undefined =0;
  prixjournalier: number | undefined;
  statut: Statut = Statut.DISPONIBLE;
}
