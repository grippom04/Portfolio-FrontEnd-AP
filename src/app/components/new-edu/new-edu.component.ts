import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionServiceService } from 'src/app/services/educacion-service.service';
import { ImageServiceService } from 'src/app/services/image-service.service';

@Component({
  selector: 'app-new-edu',
  templateUrl: './new-edu.component.html',
  styleUrls: ['./new-edu.component.css']
})
export class NewEduComponent {

  img : string='../../../assets/Img/img_notFound.png';
  nombre_titulo: string='Nombre del Titulo';
  nombre_colegio: string='Nombre del Colegio';
  fecha_inicio : string ='Fecha Inicio';
  fecha_fin: string ='Fecha de Fin'; 
  descripcion: string='Descripcion';

constructor(private educacionService: EducacionServiceService, private router:Router, public imageService : ImageServiceService){}

ngOnInit(){this.imageService.url = '../../../assets/Img/img_notFound.png'}

onCreate():void{
  const e =  new Educacion(this.imageService.url,this.nombre_titulo,this.nombre_colegio,this.fecha_inicio,
                                    this.fecha_fin,this.descripcion);
    this.educacionService.setEducacion(e).subscribe(data =>{
      alert("Educacion Creada");
      this.router.navigate(['']);
    }, err =>{
      alert("Fallo la creacion de la educacion");
      this.router.navigate(['']);
    })
                             
}

setImage($event : any){
  const name = "imagen-edu-"+Math.random()
  this.imageService.LoadImage($event,name)
}

}
