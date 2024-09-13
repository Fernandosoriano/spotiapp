import { Component, OnInit } from '@angular/core';
import { SpottifyService } from 'src/app/services/spottify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  nuevasCanciones: any[] = []
  loading        : boolean;
  error          : boolean;
  mensajeError   : string;

  constructor(private spotify: SpottifyService) {
    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases().subscribe((data:any) =>{
      this.nuevasCanciones = data;
      this.loading = false;
    },// el subscribe tiene dos opciones, antes de esta coma , es lo que
      // se ejecuta en el servidor  cuando no hay ningún error, y lo que
      // viene después de la coma es el manejo de errores, que es lo que viene 
      // después de este comentario.
    (errorServicio)=>{
      this.loading = false;
      this.error = true
      console.log(errorServicio.error.error.message);
      this.mensajeError = errorServicio.error.error.message;
    });
    
  }

}
