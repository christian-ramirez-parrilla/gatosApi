import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RazaEuropComponent } from './raza-europ/raza-europ.component';
import { RazaEgiptComponent } from './COMPONENTES/raza-egipt/raza-egipt.component';
import { RazaHimaComponent } from './COMPONENTES/raza-hima/raza-hima.component';
import { RazaDragonComponent } from './COMPONENTES/raza-dragon/raza-dragon.component';
import { VotarComponent } from './COMPONENTES/votar/votar.component';
import { FavoritosComponent } from './COMPONENTES/favoritos/favoritos.component';


const routes: Routes = [

{path:"europea",component:RazaEuropComponent},
{path:"egipto",component:RazaEgiptComponent},
{path:"hymalaya",component:RazaHimaComponent},
{path:"dragon",component:RazaDragonComponent},
{path:"",component:VotarComponent},
{path:"favoritos",component:FavoritosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
