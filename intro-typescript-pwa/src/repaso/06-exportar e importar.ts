//Exportar e importar

import {calcularIVA, Producto} from './06.1-complemento'

const carrito:Producto[]=[
    {
        desc:'Telefono 1',
        precio:1270,
    },
    {
        desc:'Telefono 2',
        precio:1270,
    }
];

const[total,iva]=calcularIVA(carrito);
console.log('Total:' , total);
console.log('Total + IVA', iva);