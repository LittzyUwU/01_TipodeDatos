//Manejo de funciones

function nombres(){
    console.log('nombre');
}

function sumar(num1:number,num2:number):number{
    return num1 + num2;

}

console.log(sumar(10,5));

function restar(num1:number,num2:number,num3?:number):number{
    if(num3){
        return num1 - num2 - num3;
    }
    else{
        return num1 - num2;
    }
}
function sumarFlecha(a:number,b:number):number{
    return a + b;

}

console.log(restar(10,5));
console.log(restar(10,5,2));