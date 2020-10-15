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

  constructor(private spotify: SpottifyService) {
    this.loading = true;

    this.spotify.getNewReleases().subscribe((data:any) =>{
      this.nuevasCanciones = data;
      this.loading = false;
    });
    
   }


}
