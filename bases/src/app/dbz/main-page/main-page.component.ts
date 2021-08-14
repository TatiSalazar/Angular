import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  // personajes: Personaje[] = [];
  
  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  // get personajes():Personaje[] {
  //   return this.dbzService.personajes;
  // }

  // agregarNuevoPersonaje( argumento: Personaje){
  //   this.personajes.push(argumento);
  // }

  // constructor(private dbzService: DbzService){
  // this.personajes = this.dbzService.personajes;
  // }

  constructor(){}


}
