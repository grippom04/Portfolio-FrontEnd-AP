import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillServiceService } from 'src/app/services/skill-service.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-skils',
  templateUrl: './skils.component.html',
  styleUrls: ['./skils.component.css']
})
export class SkilsComponent {

  isLogged=false;
  listaSkill:Skill[]=[];

  constructor(public skillService: SkillServiceService,private tokenService : TokenService, private router:Router ){}

  ngOnInit() {
    this.CargarSkill();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }
    else{
      this.isLogged=false;
    }
  }
  public CargarSkill():void {
    this.skillService.getAllSkill().subscribe(data =>{
      this.listaSkill = data;
      })
  }

  public onDelete(i:number):void {
    this.skillService.wipeSkill(this.listaSkill[i].id).subscribe(data =>{
      alert("Skill Borrada");
      this.ngOnInit();
    }, err =>{
      alert("Fallo al borrada Skill");
      this.router.navigate(['']);
    })
  }


  public onEdit(i:number):void {
    this.skillService.setId(this.listaSkill[i].id);
    this.router.navigate(['/edit-skill']);
  }

}
