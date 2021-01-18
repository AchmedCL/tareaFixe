import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient ) { 
    //console.log('funcionando pkemon service')
  }

  //Obtiene pokemones
  getPokemones(pokemonId: any)
  {
    return this.http.get<any>(this.baseUrl+/pokemon/+pokemonId)
  }

}