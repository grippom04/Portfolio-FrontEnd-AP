import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionServiceService } from 'src/app/services/educacion-service.service';

@Component({
  selector: 'app-new-edu',
  templateUrl: './new-edu.component.html',
  styleUrls: ['./new-edu.component.css']
})
export class NewEduComponent {

  img : string='';
  nombre_titulo: string='';
  nombre_colegio: string='';
  fecha_inicio : string ='';
  fecha_fin: string =''; 
  descripcion: string='';

constructor(private educacionService: EducacionServiceService, private router:Router){}

onCreate():void{
  const e =  new Educacion(this.img,this.nombre_titulo,this.nombre_colegio,this.fecha_inicio,
                                    this.fecha_fin,this.descripcion);
    this.educacionService.setEducacion(e).subscribe(data =>{
      alert("Educacion Creada");
      this.router.navigate(['']);
    }, err =>{
      alert("Fallo la creacion de la educacion");
      this.router.navigate(['']);
    })
                             
}

onAction($event : any){
    
}

}
