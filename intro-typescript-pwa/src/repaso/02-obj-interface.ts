//Objetos

import { getParsedCommandLineOfConfigFile } from "typescript";

let amaterno:string|number; //con el : y | se define el tipo de datos que tendrá esa variable

amaterno='gutierrez'; 
amaterno=100;

let mascotas=['perro','gato',100,true];

let tem2:(boolean|number|string)[]=['rata', 100];

tem2.push(200);

let acciones:string[]=['dormir','comer','volar'];

interface Alumno{
    matricula:number|string,
    nombre:string,
    apaterno:string,
    acciones?:string[], //al colocar "?"" es opcional esa variable
    email:string,
}

const alumno:Alumno={
    matricula:1234,
    nombre:'Mario',
    apaterno:'Lopez',
    email:'xxxx@gmail.com'
}

alumno.nombre='dario';

console.table(alumno);