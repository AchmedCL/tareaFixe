import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//servicios
import { PokemonService } from './services/pokemon.service';
import { ConexionService } from './services/conexion.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { BuscarPokemonComponent } from './components/buscar-pokemon/buscar-pokemon.component';
import { AddPokemonEncontradoComponent } from './components/add-pokemon-encontrado/add-pokemon-encontrado.component';
import { PokemonEncontradosComponent } from './components/pokemon-encontrados/pokemon-encontrados.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

const routes:Routes = [
  { path: 'buscarPokemon', component: BuscarPokemonComponent},
  { path: 'agregarPokemon', component: AddPokemonEncontradoComponent},
  { path: 'pokemonEncontrados', component: PokemonEncontradosComponent},
  { path: 'pokemon', component: PokemonComponent},
  { path: 'home', component: HomeComponent},
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PokemonComponent,
    BuscarPokemonComponent,
    AddPokemonEncontradoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAnalyticsModule,
    AngularFirestoreModule
  ],
  providers: [
    PokemonService,
    ConexionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
