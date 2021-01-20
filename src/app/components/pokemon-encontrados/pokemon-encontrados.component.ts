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
    this.conexion.listaItem().subscribe(item=>{
      this.items = item;
      console.log(this.items);
      
    })
  }

  ngOnInit(): void {
  }






  /*addPokemon(pokemon:any){
  this.pokemonservice.getPokemones(pokemon).subscribe(resp =>{
        console.log("hola")
    let dataPokemon = {
      id: resp.id,  
      nombre: resp.name,
      ability: resp.abilities[0].ability.name,
      hiddenAbility: resp.abilities[1].ability.name,
      hpStat: resp.stats[0].base_stat,
      atkStat: resp.stats[1].base_stat,
      defStat: resp.stats[2].base_stat,
      spAtkStat: resp.stats[3].base_stat,
      spDefStat: resp.stats[4].base_stat,
      speedStat: resp.stats[5].base_stat,
      frontSprite: resp.sprites.front_default,
      shinyFrontSprite: resp.sprites.front_shiny
    }
  
    this.pokemonesEncontrados.push(dataPokemon)
    
  })
  }*/
}

