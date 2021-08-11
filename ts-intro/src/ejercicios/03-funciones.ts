

console.log('Hola Mundo! I love You');

/*
    ===== Código de TypeScript =====
*/
//siempre colocar el tipo de dato a los argumentos
 function sumar(a:number,b:number):number {
     return a + b;
 }

 const sumarFlecha= (a:number,b:number):number =>{
     return a+b;
 }
 function multiplicar(numero:number,otro?:number,base:number=2):number {
     return numero*base;
 }

//  const resultado=multiplicar(2,0,3);
//  console.log(resultado);

interface PersonajeLOR {
    nombre:string;
    pv:number;
    mostrarHP: () => void;
}

function curar(personaje:PersonajeLOR,curarX:number):void{

    personaje.pv += curarX;

}
const nuevoPersonaje: PersonajeLOR = {

    nombre:'Strider',
    pv:50,
    mostrarHP(){
        console.log('Puntos de vida:',this.pv);
    }
}
curar(nuevoPersonaje,20);
nuevoPersonaje.mostrarHP();


