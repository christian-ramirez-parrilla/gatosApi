import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './COMPONENTES/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { RazaEuropComponent } from './raza-europ/raza-europ.component';
import { FooterComponent } from './COMPONENTES/footer/footer.component';
import { RazaEgiptComponent } from './COMPONENTES/raza-egipt/raza-egipt.component';
import { RazaHimaComponent } from './COMPONENTES/raza-hima/raza-hima.component';
import { RazaDragonComponent } from './COMPONENTES/raza-dragon/raza-dragon.component';
import { VotarComponent } from './COMPONENTES/votar/votar.component';
import { FavoritosComponent } from './COMPONENTES/favoritos/favoritos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RazaEuropComponent,
    FooterComponent,
    RazaEgiptComponent,
    RazaHimaComponent,
    RazaDragonComponent,
    VotarComponent,
    FavoritosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
