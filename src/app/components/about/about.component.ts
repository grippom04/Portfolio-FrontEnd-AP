import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

p : Persona = new Persona("","","","","");
listaPersona:Persona[]=[];
isLogged=false;

constructor(public personaService: PersonaService, private tokenService : TokenService, private router:Router){}

  ngOnInit(): void{
    this.CargarPersonas(); 
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }
    else{
      this.isLogged=false;
    }
  }

  public CargarPersonas(): void{
    this.personaService.getAllPersona().subscribe(data =>{
      this.listaPersona = data;
      this.p = this.listaPersona[0];
      if(this.listaPersona[0].img=='' ||
         this.listaPersona[0].img==null ||
         this.listaPersona[0].img =="null" ||
         this.listaPersona[0].img =="")
         this.p.img="../../../assets/Img/perfil.jpg"
    })
  }

  public onEdit(i:number):void {
    this.personaService.setId(this.listaPersona[i].id);
    this.router.navigate(['/edit-per']);
  }

}
