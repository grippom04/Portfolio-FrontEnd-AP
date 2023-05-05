import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaServiceService } from 'src/app/services/experiencia-service.service';

@Component({
  selector: 'app-edit-exp',
  templateUrl: './edit-exp.component.html',
  styleUrls: ['./edit-exp.component.css']
})
export class EditExpComponent {

  img : string='';
  nombre_trabajo: string='';
  nombre_compania: string='';
  fecha_inicio : string ='';
  fecha_fin: string =''; 
  descripcion: string='';

  constructor(private experienciaService: ExperienciaServiceService, private router:Router){}


ngOnInit() {
const pos : number = this.experienciaService.getId();
this.experienciaService.getExperiencia(pos).subscribe(data =>{
  const e : Experiencia=data;
  this.img=e.img;
  this.nombre_trabajo=e.nombre_trabajo;
  this.nombre_compania=e.nombre_compania;
  this.fecha_inicio=e.fecha_inicio;
  this.fecha_fin=e.fecha_fin;
  this.descripcion=e.descripcion;
})

}  

onEdit():void{
  const e =  new Experiencia(this.img,this.nombre_trabajo,this.nombre_compania,this.fecha_inicio,
                                    this.fecha_fin,this.descripcion);
  e.setId(this.experienciaService.getId());                          
  this.experienciaService.editExperiencia(e).subscribe(data =>{
    alert("Experiencia Modificada");
    this.router.navigate(['']);
  }, err =>{
      alert("Fallo la modificacion de la experiencia");
      this.router.navigate(['']);
  })
                               
}
onAction($event : any){
    
}

}
