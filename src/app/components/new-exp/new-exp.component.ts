import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaServiceService } from 'src/app/services/experiencia-service.service';
import { ImageServiceService } from 'src/app/services/image-service.service';


@Component({
  selector: 'app-new-exp',
  templateUrl: './new-exp.component.html',
  styleUrls: ['./new-exp.component.css']
})
export class NewExpComponent {

  img : string='../../../assets/Img/img_notFound.png';
  nombre_trabajo: string='Nombre del puesto';
  nombre_compania: string='Nombre de la compania';
  fecha_inicio : string ='Fecha de inicio';
  fecha_fin: string ='Fecha de fin'; 
  descripcion: string='Sin descripcion';

constructor(private experienciaService: ExperienciaServiceService, private router:Router, public imageService : ImageServiceService){}

ngOnInit(){this.imageService.url = '../../../assets/Img/img_notFound.png'}

onCreate():void{
  const e =  new Experiencia(this.imageService.url,this.nombre_trabajo,this.nombre_compania,this.fecha_inicio,
                                    this.fecha_fin,this.descripcion);
    this.experienciaService.setExperiencia(e).subscribe(data =>{
      alert("Experiencia Creada");
      this.router.navigate(['']);
    }, err =>{
      alert("Fallo la creacion de la experiencia");
      this.router.navigate(['']);
    })
                             
}

setImage($event : any){
  const name = "imagen-exp-"+Math.random()
  this.imageService.LoadImage($event,name)
}

}


