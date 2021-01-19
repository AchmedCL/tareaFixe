import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  public pokemones: Array<any> = []
  constructor( private pokemonservice: PokemonService) 
  {
    for(var i:number=1;i<151;i++){
      this.pokemonservice.getPokemones(i).subscribe(resp =>{
        
        let dataPokemon = {
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
      
        this.pokemones.push(dataPokemon)
      
      })
    }
  }
   ngOnInit(): void {
   }

}
