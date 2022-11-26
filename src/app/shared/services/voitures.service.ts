import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VoituresService {
  private url: string = environment.urlApi;

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get(this.url + '/vehicules/');
  }
}
