import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais-interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;
  translations!: string[];
  

  constructor(
    private activatedRoute: ActivatedRoute,
    private PaisService: PaisService
    ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.PaisService.getPaisPorAlpha(id)),
        tap(console.log) //imprime lo que hay en el observable
        )
        .subscribe( pais => {
          this.pais = pais; 
          this.translations = Object.values( this.pais.translations )
          
        });
  }

}
