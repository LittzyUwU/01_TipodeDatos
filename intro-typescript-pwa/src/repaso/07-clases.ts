//Clases

class Persona{ // private, protected, public
    nombre:string;
    edad:number;

    constructor(a:string,b:number){
        this.nombre=a;
        this.edad=b;
    }

    imprimir():void{
        console.log(`Nombre: ${this.nombre} y edad: ${this.edad}`); //alt gr + eso
    }
}

let persona1:Persona;
persona1=new Persona('Dario',22);

// let persona2=new Persona();

persona1.nombre='Mario';
persona1.edad=23;
persona1.imprimir();
// persona2.imprimir();

class Dado{
    private valor:number;
    public tirar(){
        this.generar();
    }
    private generar(){
        this.valor=Math.floor(Math.random()*6)+1;
    }
    public imprimir(){
        console.log(`Salio el valor: ${this.valor}`);
    }
}

let dado1=new Dado();
dado1.tirar();
dado1.imprimir();