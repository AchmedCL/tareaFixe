import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-add-pokemon-encontrado',
  templateUrl: './add-pokemon-encontrado.component.html',
  styleUrls: ['./add-pokemon-encontrado.component.css']
})
export class AddPokemonEncontradoComponent implements OnInit {

  pokemon:any = {
    nombre: ''
  }
  constructor( private servicio:ConexionService) { }

  ngOnInit(): void {
  }
  agregar()
  {
    this.servicio.addItem(this.pokemon);
  }
}
