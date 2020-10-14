import { Component, OnInit } from '@angular/core';
import { SpottifyService } from 'src/app/services/spottify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  nuevasCanciones: any[] = []

  constructor(private spotify: SpottifyService) {

    this.spotify.getNewReleases().subscribe((data:any) =>{
      this.nuevasCanciones = data;
    });
    
   }


}
