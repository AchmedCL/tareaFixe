import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-buscar-pokemon',
  templateUrl: './buscar-pokemon.component.html',
  styleUrls: ['./buscar-pokemon.component.css']
})
export class BuscarPokemonComponent implements OnInit {

  public pokemones: Array<any> = []
  constructor( private pokemonservice: PokemonService) 
  {
    for(var i:number=1;i<151;i++){
      this.pokemonservice.getPokemones(i).subscribe(resp =>{
        let dataPokemon = {
          id: resp.id,  
          nombre: resp.name,
          url: resp.forms[0].url
        }
        this.pokemones.push(dataPokemon)
        //console.log(this.pokemones.push(resp))
        //console.log(this.pokemones)
      })
    }
  }
  ngOnInit(): void {
  }

}
