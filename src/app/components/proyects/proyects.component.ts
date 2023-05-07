import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Proyect } from 'src/app/model/proyect';
import { ProyectosServiceService } from 'src/app/services/proyectos-service.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent {
  constructor(public proyectoService: ProyectosServiceService,private tokenService : TokenService, private router:Router){}

  isLogged=false;
  listaProyecto:Proyect[]=[];
  
  ngOnInit() {
    this.CargarProyectos();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }
    else{
      this.isLogged=false;
    }
  }

  public CargarProyectos():void {
    this.proyectoService.getAllProyecto().subscribe(data =>{
      this.listaProyecto = data;
      })
  }

  public onDelet(i:number):void {
    this.proyectoService.wipeProyecto(this.listaProyecto[i].id).subscribe(data =>{
      alert("Proyecto Borrado");
      this.ngOnInit();
    }, err =>{
      alert("Fallo al borrada el proyecto");
      this.router.navigate(['']);
    })
  }


  public onEdit(i:number):void {
    this.proyectoService.setId(this.listaProyecto[i].id);
    this.router.navigate(['/edit-proy']);
  }

}
