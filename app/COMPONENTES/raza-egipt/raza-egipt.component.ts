import { Component, OnInit } from '@angular/core';
import { GatosServiciosService } from '../../SERVICIO/gatos-servicios.service';

@Component({
  selector: 'app-raza-egipt',
  templateUrl: './raza-egipt.component.html',
  styleUrls: ['./raza-egipt.component.css']
})
export class RazaEgiptComponent implements OnInit {

  raza;

  foto;

  constructor( private miApiGato: GatosServiciosService
    
    
  
  ) { }

  ngOnInit(): void {

    this.miApiGato.getEgiptRazaFoto().subscribe(respuesta=>{

      this.foto = respuesta[0].url;


    },error=>{




    })

    this.miApiGato.getEgiptRazaInfo().subscribe(respuesta=>{

      this.raza = respuesta[0];

      console.log(this.raza);

    },error=>{




    })

 

  }

}
