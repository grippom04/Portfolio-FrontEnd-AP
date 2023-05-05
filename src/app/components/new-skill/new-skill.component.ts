import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { ImageServiceService } from 'src/app/services/image-service.service';
import { SkillServiceService } from 'src/app/services/skill-service.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})


export class NewSkillComponent {

  img : string ='../../../assets/Img/img_notFound.png' ;
  porcentaje:number = 0;
  outerColor:string = '#bd9046';
  innerColor:string = '#f8c679';
  nombre:string =  "Sin Nombre";

  constructor(private skillService: SkillServiceService, private router:Router, public imageService : ImageServiceService){

  }

  ngOnInit(){this.imageService.url = '../../../assets/Img/img_notFound.png'}

  onCreate():void{
      const s = new Skill(this.imageService.url,this.porcentaje,this.outerColor,this.innerColor,this.nombre);      
      this.skillService.setSkill(s).subscribe(data =>{
      alert("Skill Creada");
      this.router.navigate(['']);
      }, err =>{
      alert("Fallo la creacion de la skill");
      this.router.navigate(['']);
      })                                 
  }

  setImage($event : any){
    const name = "imagen-skill-"+Math.random()
    this.imageService.LoadImage($event,name)
  }
  
}


