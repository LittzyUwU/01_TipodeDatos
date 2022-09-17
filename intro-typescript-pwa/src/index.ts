//Practica 3: operación de multiplicar a * b, usando sumas =15

class operacion{
    private numero:number;
    a:number=3;

    setNumero(a:number){
        this.numero=a;
       
    }
    getNumero():number{
        return this.numero;
    }
    calcular():void{
        for(let i=1; i<11; ++i){
            console.log(`${this.numero} + ${this.numero} + ${this.numero} + ${this.numero} + ${this.numero} = ${i*this.numero}`);
        }
    }
}

let operacion1= new operacion();
operacion1.setNumero(3);
console.log('Resultado' + operacion1.calcular());
