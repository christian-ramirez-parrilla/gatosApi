import { Component, OnInit } from '@angular/core';
import { GatosServiciosService } from '../SERVICIO/gatos-servicios.service';

@Component({
  selector: 'app-raza-europ',
  templateUrl: './raza-europ.component.html',
  styleUrls: ['./raza-europ.component.css']
})
export class RazaEuropComponent implements OnInit {

  raza;

  foto;

  constructor( 
    
    private miApiGatos:GatosServiciosService
    
    
  ) { }

  ngOnInit(): void {

    this.miApiGatos.getEuropeaRazaFoto().subscribe(vuelta=>{

      this.foto = vuelta[0].url;

      


    },error=>{

      


    })

    this.miApiGatos.getEuropeanRazaInfo().subscribe( respuesta=>{

      
      this.raza = respuesta[0];

      
      

    },error=>{

      

    })

  }

}
