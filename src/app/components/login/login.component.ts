import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoguinUser } from 'src/app/model/loguin-user';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  isLogged=false;
  isLoguinFail=false;
  loguinUser!:LoguinUser;
  nombreUsuario! : string;
  password! : string;
  roles : string[] = [];
  errorMsj! : string;
  

  constructor(private router:Router,private tokenService:TokenService, private authService:AuthService){
        
  }

  ngOnInit() {
    if(this.tokenService.getToken()){
      this.isLogged=true;
      this.isLoguinFail=false;
      this.roles=this.tokenService.getAthorities();
    }    
  }

  onLogin(): void{
    this.loguinUser = new LoguinUser(this.nombreUsuario, this.password); 
    console.log(this.nombreUsuario);
    this.authService.loguin(this.loguinUser).subscribe(data =>{
        this.isLogged = true;
        this.isLoguinFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate([''])
      }, err =>{
        this.isLogged = false;
        this.isLoguinFail = true;
        this.errorMsj = err.error.mensaje;
        console.log(this.errorMsj);
        
      })
  }

}
