import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Proyect } from 'src/app/model/proyect';
import { ImageServiceService } from 'src/app/services/image-service.service';
import { ProyectosServiceService } from 'src/app/services/proyectos-service.service';

@Component({
  selector: 'app-new-proy',
  templateUrl: './new-proy.component.html',
  styleUrls: ['./new-proy.component.css']
})
export class NewProyComponent {

  img : string='../../../assets/Img/img_notFound.png';
  nombre_proyecto: string='Nombre del Proyecto';
  fecha_inicio : string ='Fecha Inicio';
  descripcion: string='Descripcion';
  link: string='Link';

  constructor(private proyectoService: ProyectosServiceService, private router:Router, public imageService : ImageServiceService){}

  ngOnInit(){this.imageService.url = '../../../assets/Img/img_notFound.png'}

  onCreate():void{
  const p =  new Proyect(this.imageService.url,this.nombre_proyecto,this.fecha_inicio,this.descripcion,this.link);
    this.proyectoService.setProyecto(p).subscribe(data =>{
      alert("Proyecto Creado");
      this.router.navigate(['']);
    }, err =>{
      alert("Fallo la creacion del proyecto");
      this.router.navigate(['']);
    })
                             
  }

  setImage($event : any){
  const name = "imagen-proy-"+Math.random()
  this.imageService.LoadImage($event,name)
  }

}
