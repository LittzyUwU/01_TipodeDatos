import { CallExpression } from "typescript"

interface Direccion{
    calle:string,
    pais:string,
    estado:string
}

interface DatosAlumno{
    nombre:string,
    edad:number,
    direccion:Direccion,
    mostrarDireccion:()=>string;
}

const utlAlumno:DatosAlumno={
    nombre:'Mario',
    edad: 23,
    direccion: {
        calle:'vicente valtierra',
        pais:'mexico',
        estado:'guanajuato'
    
},

mostrarDireccion(){
    return this.nombre+'  ,'+this.edad+' , '+this.direccion.estado+' , '+this.direccion.pais;
}
}
const direccion=utlAlumno.mostrarDireccion();
console.log(direccion);
