import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticationService {

  url='https://portfoliofrontend-3f1ea.web.app';
  currenUserSubject:BehaviorSubject<any>;

  constructor(private http:HttpClient) {
    this.currenUserSubject = new BehaviorSubject<any>('currenUser' );
  }

  LogIn(credenciales:any):Observable<any> {
    return this.http.get(this.url,credenciales).pipe(map(data=>{

      sessionStorage.setItem('currenUser',JSON.stringify(data));
      return data;
    }))
  }
}
