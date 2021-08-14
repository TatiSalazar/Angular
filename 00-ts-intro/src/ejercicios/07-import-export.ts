import { Producto, calculaISV } from './06-desestructuracion-funcion';

console.log('Hola Mundo! I love You');

/*
    ===== Código de TypeScript =====
*/

const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio:100,

    },
    {
        desc:'Telefono 2',
        precio: 150
    },
];

const [total,isv] = calculaISV(carritoCompras);

console.log('Total ', total);
console.log('ISV ', total);
