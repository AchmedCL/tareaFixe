import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-buscar-pokemon',
  templateUrl: './buscar-pokemon.component.html',
  styleUrls: ['./buscar-pokemon.component.css']
})
export class BuscarPokemonComponent implements OnInit {

  public pokemones: Array<any> = []
  
  constructor( private pokemonservice: PokemonService){
  }
  ngOnInit(): void {
  }
  getPokemon(data:any){
    this.pokemonservice.getPokemones(data).subscribe(resp =>{
        
      let nuevoPokemon = {
        id: resp.id,  
        nombre: resp.name,
        ability: resp.abilities[0].ability.name,
        //hiddenAbility: resp.abilities[1].ability.name,
        hpStat: resp.stats[0].base_stat,
        atkStat: resp.stats[1].base_stat,
        defStat: resp.stats[2].base_stat,
        spAtkStat: resp.stats[3].base_stat,
        spDefStat: resp.stats[4].base_stat,
        speedStat: resp.stats[5].base_stat,
        frontSprite: resp.sprites.front_default,
        shinyFrontSprite: resp.sprites.front_shiny
      }
    
      this.pokemones.push(nuevoPokemon)
    })
  }
}
