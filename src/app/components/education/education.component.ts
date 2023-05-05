import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionServiceService } from 'src/app/services/educacion-service.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {


  constructor(public educacionService: EducacionServiceService,private tokenService : TokenService, private router:Router){}

  isLogged=false;
  listaEducacion:Educacion[]=[];
  
  ngOnInit() {
    this.CargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }
    else{
      this.isLogged=false;
    }
  }

  public CargarEducacion():void {
    this.educacionService.getAllEducacion().subscribe(data =>{
      this.listaEducacion = data;
      })
  }

  public onDelet(i:number):void {
    this.educacionService.wipeEducacion(this.listaEducacion[i].id).subscribe(data =>{
      alert("Educacion Borrada");
      this.ngOnInit();
    }, err =>{
      alert("Fallo al borrada la educacion");
      this.router.navigate(['']);
    })
  }


  public onEdit(i:number):void {
    this.educacionService.setId(this.listaEducacion[i].id);
    this.router.navigate(['/edit-edu']);
  }
}
