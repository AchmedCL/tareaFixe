import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';
//import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-encontrados',
  templateUrl: './pokemon-encontrados.component.html',
  styleUrls: ['./pokemon-encontrados.component.css']
})
export class PokemonEncontradosComponent implements OnInit {
  
  public pokemonesEncontrados: Array<any> = []
  items:any;
  constructor(/*private pokemonservice: PokemonService,*/ private conexion:ConexionService)
  {
    this.conexion.listaItem().subscribe(encounters=>{
      this.items = encounters;
      console.log(this.items);
      
    })
  }

  ngOnInit(): void {
  }

}

