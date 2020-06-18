import { Component, OnInit } from '@angular/core';
import { GatosServiciosService } from '../../SERVICIO/gatos-servicios.service';

@Component({
  selector: 'app-raza-hima',
  templateUrl: './raza-hima.component.html',
  styleUrls: ['./raza-hima.component.css']
})
export class RazaHimaComponent implements OnInit {

  raza;

  foto;

  constructor( 
    
    private miApiGato:GatosServiciosService
    
    
  ) { }

  ngOnInit(): void {

    this.miApiGato.getHimaRazaFoto().subscribe(respuesta=>{

      this.foto = respuesta[0].url;


    },error=>{



    })

    this.miApiGato.getHimaRazaInfo().subscribe(respuesta=>{

      this.raza = respuesta[0];

    },error=>{




    })


  }

}
