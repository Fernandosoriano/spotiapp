import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { SpottifyService } from 'src/app/services/spottify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent  {
artista   :any = [];
topTracks :any = [];
loading: boolean;
  constructor (private router :ActivatedRoute,
              private spotify:SpottifyService)
              {
                this.router.params.subscribe(params=>{
                this.loading = true;
                this.getArtista(params.id);
                this.getTopTracks(params.id);
                console.log(params.id)
              })
  }

  
  getArtista(id:string){
    this.loading = true;
this.spotify.getArtista(id).subscribe(artista=>{
  console.log(artista);
  this.artista = artista;
  this.loading = false
})
  }
  getTopTracks(id:string){
    this.spotify.getTopTracks(id).subscribe(topTracks =>{
      console.log(topTracks);
      this.topTracks = topTracks;
    })

  }
}

