import { Injectable } from '@angular/core';
import { Switch } from '../model/switch';
import { HttpClient } from '@angular/common/http';
import { Proyect } from '../model/proyect';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectosServiceService {

  proyhURL = Switch.url+'/proyecto';
  id! : number;

  constructor(private http:HttpClient) {}

    public getAllProyecto(): Observable<Proyect[]>{
      return this.http.get<Proyect[]>(this.proyhURL+'/getAll')
    }

    public getProyecto(id:number): Observable<Proyect>{
      return this.http.get<Proyect>(this.proyhURL + `/get/${id}`)
    }

    public setProyecto (e : Proyect)  : Observable<any>{
      return this.http.post<Proyect>(this.proyhURL + '/set', e)
    }

    public editProyecto(e : Proyect) : Observable<any>{
      return this.http.put<any>(this.proyhURL + '/edit',e)
    }

    public wipeProyecto(id : number) : Observable<any>{
      return this.http.delete<any>(this.proyhURL + `/delete/${id}`)
    }

    public setId(i: number): void {
      this.id = i;
      
    } 
    public getId(): number {
      return this.id;
    }
}
