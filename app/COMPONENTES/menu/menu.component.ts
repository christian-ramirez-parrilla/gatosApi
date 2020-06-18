import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  visible = false;

  constructor() { }

  ngOnInit(): void {
  }

  mostrarMenu(){

    if( this.visible == false ){

      this.visible = true;


    }else{

      this.visible = false;

    }


  }


}
