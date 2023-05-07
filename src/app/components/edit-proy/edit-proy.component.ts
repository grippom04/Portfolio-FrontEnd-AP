import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Proyect } from 'src/app/model/proyect';
import { ImageServiceService } from 'src/app/services/image-service.service';
import { ProyectosServiceService } from 'src/app/services/proyectos-service.service';

@Component({
  selector: 'app-edit-proy',
  templateUrl: './edit-proy.component.html',
  styleUrls: ['./edit-proy.component.css']
})
export class EditProyComponent {

  id! : number;
  img : string="";
  nombre_proyecto: string="";
  fecha_inicio: string="";
  descripcion: string="";
  link: string="";

  constructor(private proyectoService: ProyectosServiceService, private router:Router, public imageService : ImageServiceService){}


  ngOnInit() {
  const pos : number = this.proyectoService.getId();
  this.proyectoService.getProyecto(pos).subscribe(data =>{
    const p : Proyect=data;
    this.img=p.img;
    this.nombre_proyecto=p.nombre_proyecto;
    this.fecha_inicio=p.fecha_inicio;
    this.descripcion=p.descripcion;
    this.link=p.link;
    this.imageService.url = this.img;
  })
  }
  

  onEdit():void{
    const p =  new Proyect(this.imageService.url,this.nombre_proyecto,this.fecha_inicio,this.descripcion,this.link);
    p.setId(this.proyectoService.getId());                          
    this.proyectoService.editProyecto(p).subscribe(data =>{
      alert("Proyecto Modificada");
      this.router.navigate(['']);
    }, err =>{
        alert("Fallo la modificacion de la educacion");
        this.router.navigate(['']);
    })
                                
  }
  setImage($event : any){
    const name = "imagen-proy-"+Math.random()
    this.imageService.LoadImage($event,name)
  }

}
