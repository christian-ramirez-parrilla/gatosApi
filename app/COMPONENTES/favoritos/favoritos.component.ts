import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  datos;

  deListaAobjeto;

  listaFotos;

  srcUrl;

  constructor() { }

  ngOnInit(): void {

    this.datos =localStorage.getItem("listaFotos");

    this.deListaAobjeto = JSON.parse(this.datos);

    

    

  }

}
