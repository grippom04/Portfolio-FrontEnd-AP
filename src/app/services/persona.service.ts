import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';
import { Switch } from '../model/switch';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  perURL = Switch.url+'/persona';
  id! : number;

  constructor(private http:HttpClient) {}

  public getAllPersona(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.perURL+'/getAll')
  }

  public getPersona(id:number): Observable<Persona>{
    return this.http.get<Persona>(this.perURL + `/get/${id}`)
  }

  public setPersona (e : Persona)  : Observable<any>{
    return this.http.post<Persona>(this.perURL + '/set', e)
  }

  public editPersona(e : Persona) : Observable<any>{
    return this.http.put<any>(this.perURL + '/edit',e)
  }

  public wipePersona(id : number) : Observable<any>{
    return this.http.delete<any>(this.perURL + `/delete/${id}`)
  }

  public setId(i: number): void {
    this.id = i;
    
  } 
  public getId(): number {
    return this.id;
  }
}
