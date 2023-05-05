export class Skill {

    id! : number;
    img : string;
    porcentaje:number;
    outerColor:string;
    innerColor:string;
    nombre:string;
        
    constructor(img: string, porcentaje: number,outerColor: string,innerColor: string,nombre:string) {

           this.img = img;
           this.porcentaje=porcentaje;
           this.outerColor=outerColor;
           this.innerColor=innerColor;
           this.nombre=nombre;
    }

    public setId(id:number):void{
        this.id = id;
    }
    public getId():number{
        return this.id;
    }
}
