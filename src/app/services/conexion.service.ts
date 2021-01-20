import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface pokemonesEncontrados 
{ 
  name:string
}

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  private itemsCollection: AngularFirestoreCollection<pokemonesEncontrados>;
  encounters: Observable<pokemonesEncontrados[]>;
  
  constructor(private afs: AngularFirestore) { 
    this.itemsCollection = afs.collection<pokemonesEncontrados>('encounters');
    this.encounters = this.itemsCollection.valueChanges();
  }
  listaItem()
  {
    return this.encounters;
  }
  addItem(item: pokemonesEncontrados) {

    this.itemsCollection.add(item);
  }
}
