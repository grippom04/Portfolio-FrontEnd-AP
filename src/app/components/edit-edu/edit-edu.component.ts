import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionServiceService } from 'src/app/services/educacion-service.service';

@Component({
  selector: 'app-edit-edu',
  templateUrl: './edit-edu.component.html',
  styleUrls: ['./edit-edu.component.css']
})
export class EditEduComponent {

  img : string='';
  nombre_titulo: string='';
  nombre_colegio: string='';
  fecha_inicio : string ='';
  fecha_fin: string =''; 
  descripcion: string='';

  constructor(private educacionService: EducacionServiceService, private router:Router){}


ngOnInit() {
const pos : number = this.educacionService.getId();
this.educacionService.getEducacion(pos).subscribe(data =>{
  const e : Educacion=data;
  this.img=e.img;
  this.nombre_titulo=e.nombre_titulo;
  this.nombre_colegio=e.nombre_colegio;
  this.fecha_inicio=e.fecha_inicio;
  this.fecha_fin=e.fecha_fin;
  this.descripcion=e.descripcion;
})

}  

onEdit():void{
  const e =  new Educacion(this.img,this.nombre_titulo,this.nombre_colegio,this.fecha_inicio,
                                    this.fecha_fin,this.descripcion);
  e.setId(this.educacionService.getId());                          
  this.educacionService.editEducacion(e).subscribe(data =>{
    alert("Educacion Modificada");
    this.router.navigate(['']);
  }, err =>{
      alert("Fallo la modificacion de la educacion");
      this.router.navigate(['']);
  })
                               
}
onAction($event : any){
    
}

}
