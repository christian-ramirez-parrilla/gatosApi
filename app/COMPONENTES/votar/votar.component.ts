import { Component, OnInit } from '@angular/core';
import { GatosServiciosService } from '../../SERVICIO/gatos-servicios.service';

@Component({
  selector: 'app-votar',
  templateUrl: './votar.component.html',
  styleUrls: ['./votar.component.css']
})
export class VotarComponent implements OnInit {

  foto;

  datos;

  deListaAobjeto;

  listaFavoritos = [];

  cadenaUrl;

  arrayACadena;

  creacionLocal;

  cogeLocal;

  constructor( 
    
    private miApiGato:GatosServiciosService
    
  ) { }

  ngOnInit(): void {

    if(!localStorage.getItem("listaFotos")){

      

      this.creacionLocal = JSON.stringify(this.listaFavoritos);

      localStorage.setItem("listaFotos",this.creacionLocal);

    }  

    

    

    this.datos =localStorage.getItem("listaFotos");

    this.deListaAobjeto = JSON.parse(this.datos);

    this.listaFavoritos = this.deListaAobjeto;

    this.miApiGato.getFotosVoto().subscribe(respuesta=>{

      this.foto = respuesta[0].url;

      

      

    },error=>{



    })

  }

  noMeGusta(){

    this.miApiGato.getFotosVoto().subscribe(respuesta=>{

      this.foto = respuesta[0].url;


    },error=>{




    })



  }

  meGusta(){

    
    

    

    this.listaFavoritos.push(this.foto);

    this.arrayACadena=JSON.stringify(this.listaFavoritos);

    localStorage.setItem("listaFotos",this.arrayACadena);

    this.miApiGato.getFotosVoto().subscribe(respuesta=>{

      this.foto = respuesta[0].url;

      



    },error=>{




    })

    


  }

  
  

}