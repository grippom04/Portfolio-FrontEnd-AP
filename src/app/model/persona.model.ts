export class Persona {

    id!: number;
    nombre: string;
    apellido: string;
    descripcion: string;
    nacimiento: string;
    img: string;

    constructor(nombre: string, apellido:string, nacimiento:string, descripcion:string, img:string){

        this.nombre = nombre;
        this.apellido = apellido;
        this.nacimiento = nacimiento;
        this.descripcion = descripcion;
        this.img = img; 
    }

    public setId(id:number):void{
        this.id = id;
    }
    public getId():number{
        return this.id;
    }

}
