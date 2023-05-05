export class Educacion {
    id! : number;
    img : string;
    nombre_titulo: string;
    nombre_colegio: string;
    fecha_inicio: string;
    fecha_fin: string;
    descripcion: string;
    
    constructor(img: string, nombre_titulo: string,nombre_colegio: string,fecha_inicio: string,
        fecha_fin: string,descripcion: string){

            this.nombre_titulo = nombre_titulo;
            this.nombre_colegio = nombre_colegio;
            this.fecha_inicio = fecha_inicio;
            this.fecha_fin = fecha_fin;
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
