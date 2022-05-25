import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { persona } from '../modelos/persona.model';



@Injectable({
  providedIn: 'root'
})

export class PersonaService {
 
  URL = 'https://backend-edit-ap.herokuapp.com/';

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona> {

    return this.http.get<persona>(this.URL+ 'personas/traer/perfil');

    
  } 

}
