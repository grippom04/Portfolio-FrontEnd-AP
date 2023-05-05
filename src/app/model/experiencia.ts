export class Experiencia {

    id! : number;
    img : string;
    nombre_trabajo: string;
    nombre_compania: string;
    fecha_inicio: string;
    fecha_fin: string;
    descripcion: string;
    
    constructor(img: string, nombre_trabajo: string,nombre_compania: string,fecha_inicio: string,
        fecha_fin: string,descripcion: string){

            this.nombre_trabajo = nombre_trabajo;
            this.nombre_compania = nombre_compania;
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
