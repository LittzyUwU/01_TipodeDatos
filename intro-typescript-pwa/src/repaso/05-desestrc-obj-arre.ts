
//Destructuracion de objetos y arreglos

interface Detalles{
    autor:string;
    anio:number;
}

interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles
}

const reproductor:Reproductor={
    volumen:90,
    segundo:60,
    cancion:'saoko',
    detalles:{
        autor:'rosalia',
        anio: 2022,
    }
}

//console.table(reproductor)

const{cancion, volumen, segundo, detalles}=reproductor;

const{autor, anio}=detalles;

console.table('el nombre de la cancion es: ' + cancion);
console.table('el nombre de la cancion es: ' + volumen);
console.table('el nombre de la cancion es: ' + segundo);
console.table('el nombre de la cancion es: ' + detalles);

//Ejercicio Koku ------------
const dbz:string[]=['Goku','Vegata777','Krillin','Yamcha'];

console.log('Personaje 1:', dbz[0]);
console.log('Personaje 2:', dbz[1]);
console.log('Personaje 3:', dbz[2]);
console.log('Personaje 4:', dbz[3]);

const[p1,p2,p3,p4]=dbz; 
console.log('Personaje 1:', p1);
console.log('Personaje 2:', p2);
console.log('Personaje 3:', p3);
console.log('Personaje 4:', p4);