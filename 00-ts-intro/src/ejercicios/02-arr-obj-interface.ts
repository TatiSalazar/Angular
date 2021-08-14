
/*
    ===== Código de TypeScript =====
*/
let habilidades: string[]= ['bash','counter','healing'];

let habilidades1: (boolean|string|number)[] = ['bash','counter','healing',100,true];

interface Personaje{
    nombre: string;
    hp:number;
    habilidades: string[];
    puebloNatal?:string;
}

const personaje: Personaje = {
    nombre:'Strider',
    hp:100,
    habilidades: ['Bash','Counter','Healing']
}
personaje.puebloNatal='Pueblo Paleta';
console.table(personaje);

