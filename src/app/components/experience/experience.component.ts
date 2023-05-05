import { Component, OnInit, ViewChild } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaServiceService } from 'src/app/services/experiencia-service.service';
import { TokenService } from 'src/app/services/token.service';
import { NewExpComponent } from '../new-exp/new-exp.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})


export class ExperienceComponent {
 
  constructor(public experienciaService: ExperienciaServiceService,private tokenService : TokenService, private router:Router){}

  isLogged=false;
  listaExperiencia:Experiencia[]=[];
  
  ngOnInit() {
    this.CargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }
    else{
      this.isLogged=false;
    }
  }

  public CargarExperiencia():void {
    this.experienciaService.getAllExperiencia().subscribe(data =>{
      this.listaExperiencia = data;
      })
  }

  public onDelet(i:number):void {
    this.experienciaService.wipeExperiencia(this.listaExperiencia[i].id).subscribe(data =>{
      alert("Experiencia Borrada");
      this.ngOnInit();
    }, err =>{
      alert("Fallo al borrada la experiencia");
      this.router.navigate(['']);
    })
  }


  public onEdit(i:number):void {
    this.experienciaService.setId(this.listaExperiencia[i].id);
    this.router.navigate(['/edit-exp']);
  }
  

}
    
