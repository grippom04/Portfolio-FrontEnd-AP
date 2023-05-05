import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-edit-per',
  templateUrl: './edit-per.component.html',
  styleUrls: ['./edit-per.component.css']
})
export class EditPerComponent {

  nombre: string="";
  apellido: string="";
  descripcion: string="";
  nacimiento: string="";
  img: string="";
  

  constructor(private personaService: PersonaService, private router:Router){}

  ngOnInit() {
    const pos : number = this.personaService.getId();
    this.personaService.getPersona(pos).subscribe(data =>{
      const p : Persona=data;
      this.nombre=p.nombre;
      this.apellido=p.apellido;
      this.descripcion=p.descripcion;
      this.nacimiento=p.nacimiento
      this.img=p.img;
    })
  }

  onEdit():void{
    const p =  new Persona(this.nombre,this.apellido,this.descripcion,this.nacimiento,this.img);
    p.setId(this.personaService.getId());                          
    this.personaService.editPersona(p).subscribe(data =>{
      alert("Persona Modificado");
      this.router.navigate(['']);
    }, err =>{
        alert("Fallo la modificacion de la Persona");
        this.router.navigate(['']);
    })                               
  }

  onAction($event : any){
    
  }


}
