import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'  //4 paso importar esto
import {HttpClientModule} from '@angular/common/http' // 1 modulo para poder manejar peticiones http
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

//import rutas 
import {ROUTES} from './app.routes';
// Pipes
import { NoimagePipe } from './pipes/noimage.pipe';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/shared/loading/loading.component'  // 6 importar el ROUTES y ya  ES el fin de  la defincion de rutas para toda la  app, el siguiente paso , es en el app,component.html
import { DomseguroPipe } from './pipes/domseguro.pipe';
// import { SpottifyService } from './services/spottify.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    TarjetasComponent,
    LoadingComponent,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash: true})  // 5  paso, colocar en los imports le RouterModule, y usar el forRoot, que usa como argumento el  array de rutas generado en el app.routes
  ],
  providers: [
    // SpottifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
