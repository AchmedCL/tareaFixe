import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//servicios
import { PokemonService } from './services/pokemon.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { BuscarPokemonComponent } from './components/buscar-pokemon/buscar-pokemon.component';
import { AddPokemonEncontradoComponent } from './components/add-pokemon-encontrado/add-pokemon-encontrado.component';
import { PokemonEncontradosComponent } from './components/pokemon-encontrados/pokemon-encontrados.component';
import { HomeComponent } from './components/home/home.component';


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
    HttpClientModule
  ],
  providers: [
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
