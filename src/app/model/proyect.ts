export class Proyect {

    id! : number;
    img : string;
    nombre_proyecto: string;
    fecha_inicio: string;
    descripcion: string;
    link: string;
    
    constructor(img: string, nombre_proyecto: string,fecha_inicio: string,
        descripcion: string,link: string){

            this.nombre_proyecto = nombre_proyecto;
            this.fecha_inicio = fecha_inicio;
            this.descripcion = descripcion;
            this.link = link;
            this.img = img;
    }

    public setId(id:number):void{
        this.id = id;
    }
    public getId():number{
        return this.id;
    }
}
