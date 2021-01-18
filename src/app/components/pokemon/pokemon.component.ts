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
    
    for(var i=1;i<151;i++){
      this.pokemonservice.getPokemones(i).subscribe(resp =>{
        
        this.pokemones.push(resp.name)
        //console.log(this.pokemones.push(resp))
        //console.log(this.pokemones)
      })
    }
  }
  
   ngOnInit(): void {
   }

}
