import { Component,OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-log-button',
  templateUrl: './log-button.component.html',
  styleUrls: ['./log-button.component.css']
})
export class LogButtonComponent {

    constructor(private r:Router, private tokenService : TokenService){}

    ngOnInit() {}

    login() {this.r.navigate(['/login']);}

    logOut(){
      this.tokenService.logOut();
      window.location.reload();
    }
}
