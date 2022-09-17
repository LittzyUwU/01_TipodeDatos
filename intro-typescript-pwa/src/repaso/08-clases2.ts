//Formula General

class tabla{
    private numero:number;
    public tem;

    setNumero(a:number){
        this.numero=a;
    }
    getNumero():number{
        return this.numero;
    }
    calcular():void{
        for(let i=1; i<11; ++i){
            console.log(`${this.numero} x ${i} =${i*this.numero}`)
        }

        let s:number=1;
        while(s<11){
            console.log(`${this.numero} x ${s} =${s*this.numero}`);
            ++s;
        }
    }
}

let tabla1= new tabla();
tabla1.setNumero(7);
console.log('Variable privada:' + tabla1.calcular());
