import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { ImageServiceService } from 'src/app/services/image-service.service';
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


  constructor(private personaService: PersonaService, private router:Router, public imageService : ImageServiceService){}

  ngOnInit() {   
    this.personaService.getPersona(1).subscribe(data =>{
      const p1 : Persona=data;
      this.nombre=p1.nombre;
      this.apellido=p1.apellido;
      this.descripcion=p1.descripcion;
      this.nacimiento=p1.nacimiento;
      this.img=p1.img;
      this.imageService.url=this.img;
    })
  }

  onEdit():void{
    const p2 =  new Persona(this.nombre,this.apellido,this.nacimiento,this.descripcion,this.imageService.url);
    p2.setId(1);
    console.log(p2);                        
    this.personaService.editPersona(p2).subscribe(data =>{
      alert("Persona Modificado");
      this.router.navigate(['']);
    }, err =>{
        alert("Fallo la modificacion de la Persona");
        this.router.navigate(['']);
    })                               
  }
  setImage($event : any){
    const name = "imagen-perfil-"+Math.random()
    this.imageService.LoadImage($event,name)
  }


}
