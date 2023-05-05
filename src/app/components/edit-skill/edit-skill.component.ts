import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { ImageServiceService } from 'src/app/services/image-service.service';
import { SkillServiceService } from 'src/app/services/skill-service.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent {

  constructor(private skillService: SkillServiceService, private router:Router, public imageService : ImageServiceService){}

  img : string = '' ;
  porcentaje:number = 0;
  outerColor:string = '';
  innerColor:string = '';
  nombre:string =  "";

  ngOnInit() {
    const pos : number = this.skillService.getId();
    this.skillService.getSkill(pos).subscribe(data =>{
      const s : Skill=data;
      this.img=s.img;
      this.porcentaje=s.porcentaje;
      this.outerColor=s.outerColor;
      this.innerColor=s.innerColor
      this.nombre=s.nombre;
      this.imageService.url=s.img;
    })
  }

  onEdit():void{
    const s =  new Skill(this.img,this.porcentaje,this.outerColor,this.innerColor,
                                      this.nombre);
    s.setId(this.skillService.getId());                          
    this.skillService.editSkill(s).subscribe(data =>{
      alert("Skill Modificado");
      this.router.navigate(['']);
    }, err =>{
        alert("Fallo la modificacion de la Skill");
        this.router.navigate(['']);
    })
                                  
  }

  setImage($event : any){
    const name = "imagen-exp-"+Math.random()
    this.imageService.LoadImage($event,name)
  }

}

