import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewUser } from '../model/new-user';
import { Observable } from 'rxjs';
import { LoguinUser } from '../model/loguin-user';
import { JwtDto } from '../model/jwt-dto';
import { Switch } from '../model/switch';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  authURL = Switch.url+'/auth';

  constructor(private httpClient : HttpClient) { }

  public nuevo(newUser : NewUser) : Observable<any> {
    return this.httpClient.post<any>(this.authURL+'/nuevo',newUser)
  }

  public loguin(loguingUsuario : LoguinUser) : Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authURL+'/loguin',loguingUsuario)
  }
}
