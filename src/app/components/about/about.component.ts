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

isLogged=false;
nombre: string="Sin Nombre";
apellido: string="Sin Apellido";
descripcion: string="Sin descripcion";
nacimiento: string="nn";
img: string="../../../assets/Img/perfil.jpg";
id! : number;

constructor(public personaService: PersonaService, private tokenService : TokenService, private router:Router){

}

  ngOnInit(): void{
    this.personaService.getPersona(1).subscribe(data =>{
      const p : Persona = data;
      this.nombre=p.nombre;
      this.apellido=p.apellido,this.apellido;
      this.descripcion=p.descripcion;
      this.nacimiento=p.nacimiento;
      this.img=p.img;
      this.id=p.id;
    }) 
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }
    else{
      this.isLogged=false;
    }
  }


  public onEdit(i:number):void {
    this.personaService.setId(this.id);
    this.router.navigate(['/edit-per']);
  }

}
