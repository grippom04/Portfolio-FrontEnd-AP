import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';
import { Switch } from '../model/switch';

@Injectable({
  providedIn: 'root'
})


export class EducacionServiceService {

  eduURL = Switch.url+'/educacion';
  id! : number;

  constructor(private http:HttpClient) {}

  public getAllEducacion(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.eduURL+'/getAll')
  }

  public getEducacion(id:number): Observable<Educacion>{
    return this.http.get<Educacion>(this.eduURL + `/get/${id}`)
  }

  public setEducacion (e : Educacion)  : Observable<any>{
    return this.http.post<Educacion>(this.eduURL + '/set', e)
  }

  public editEducacion(e : Educacion) : Observable<any>{
    return this.http.put<any>(this.eduURL + '/edit',e)
  }

  public wipeEducacion(id : number) : Observable<any>{
    return this.http.delete<any>(this.eduURL + `/delete/${id}`)
  }

  public setId(i: number): void {
    this.id = i;
    
  } 
  public getId(): number {
    return this.id;
  }
}
