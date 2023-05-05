import { Injectable } from '@angular/core';
import { Switch } from '../model/switch';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillServiceService {

  skillhURL = Switch.url+'/skill';
  id! : number;

  constructor(private http:HttpClient) {}

    public getAllSkill(): Observable<Skill[]>{
      return this.http.get<Skill[]>(this.skillhURL+'/getAll')
    }

    public getSkill(id:number): Observable<Skill>{
      return this.http.get<Skill>(this.skillhURL + `/get/${id}`)
    }

    public setSkill (s : Skill)  : Observable<any>{
      return this.http.post<Skill>(this.skillhURL + '/set', s)
    }

    public editSkill(s : Skill) : Observable<any>{
      return this.http.put<any>(this.skillhURL + '/edit',s)
    }

    public wipeSkill(id : number) : Observable<any>{
      return this.http.delete<any>(this.skillhURL + `/delete/${id}`)
    }

    public setId(i: number): void {
      this.id = i;
      
    } 
    public getId(): number {
      return this.id;
    }
}
