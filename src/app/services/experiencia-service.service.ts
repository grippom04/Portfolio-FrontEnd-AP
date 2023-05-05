import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experiencia } from '../model/experiencia';
import { Observable } from 'rxjs';
import { Switch } from '../model/switch';

@Injectable({
  providedIn: 'root'
  
})
export class ExperienciaServiceService {

  exphURL = Switch.url+'/experiencia';
  id! : number;

  constructor(private http:HttpClient) {}

    public getAllExperiencia(): Observable<Experiencia[]>{
      return this.http.get<Experiencia[]>(this.exphURL+'/getAll')
    }

    public getExperiencia(id:number): Observable<Experiencia>{
      return this.http.get<Experiencia>(this.exphURL + `/get/${id}`)
    }

    public setExperiencia (e : Experiencia)  : Observable<any>{
      return this.http.post<Experiencia>(this.exphURL + '/set', e)
    }

    public editExperiencia(e : Experiencia) : Observable<any>{
      return this.http.put<any>(this.exphURL + '/edit',e)
    }

    public wipeExperiencia(id : number) : Observable<any>{
      return this.http.delete<any>(this.exphURL + `/delete/${id}`)
    }

    public setId(i: number): void {
      this.id = i;
      
    } 
    public getId(): number {
      return this.id;
    }


  }