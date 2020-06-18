import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GatosServiciosService {

  constructor( 
    
    private http:HttpClient
    
  ) { }

  getEuropeaRazaFoto(){

    return this.http.get("https://api.thecatapi.com/v1/images/search?breed_ids=ebur");



  }

  
  getEuropeanRazaInfo(){

    return this.http.get("https://api.thecatapi.com/v1/breeds/search?q=eur");




  }

   getEgiptRazaFoto(){

    return this.http.get("https://api.thecatapi.com/v1/images/search?breed_ids=emau");



  }

  getEgiptRazaInfo(){

    return this.http.get("https://api.thecatapi.com/v1/breeds/search?q=egy");




  } 

  getHimaRazaFoto(){

    return this.http.get("https://api.thecatapi.com/v1/images/search?breed_ids=hima");



  }

  getHimaRazaInfo(){

    return this.http.get("https://api.thecatapi.com/v1/breeds/search?q=hima");




  } 

  getDragoRazaFoto(){

    return this.http.get("https://api.thecatapi.com/v1/images/search?breed_ids=lihu");



  }

  getDragoRazaInfo(){

    return this.http.get("https://api.thecatapi.com/v1/breeds/search?q=dra");




  } 

  getFotosVoto(){

    return this.http.get(" https://api.thecatapi.com/v1/images/search");

  }




}
