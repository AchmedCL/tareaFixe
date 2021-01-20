import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: any; 
  
  public pokemonesEncounters:Array<any> = [] 

  constructor(firestore: AngularFirestore, private pokemonservice:PokemonService) {
    this.items = firestore.collection('encounters').valueChanges();
    console.log(this.items.name);
    
  }

  ngOnInit(): void {
  }
  getEncounters()
  {

  }
}
