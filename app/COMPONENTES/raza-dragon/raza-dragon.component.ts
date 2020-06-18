import { Component, OnInit } from '@angular/core';
import { GatosServiciosService } from '../../SERVICIO/gatos-servicios.service';

@Component({
  selector: 'app-raza-dragon',
  templateUrl: './raza-dragon.component.html',
  styleUrls: ['./raza-dragon.component.css']
})
export class RazaDragonComponent implements OnInit {

  raza;

  foto;

  constructor( 
    
    private miApiGato:GatosServiciosService
    
  ) { }

  ngOnInit(): void {

    this.miApiGato.getDragoRazaFoto().subscribe(respuesta=>{

      this.foto = respuesta[0].url;

    },error=>{


    })

    this.miApiGato.getDragoRazaInfo().subscribe(respuesta=>{

      this.raza = respuesta[0];


    },error=>{



    })

  }

}
