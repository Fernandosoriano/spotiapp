import { Component } from '@angular/core';
import { SpottifyService } from 'src/app/services/spottify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
artistas:any[] = [];
  constructor(private spotify:SpottifyService) { }
buscar(termino:string){
  console.log(termino);
  this.spotify.getArtista(termino).subscribe((data:any)=>{
    this.artistas = data;
})
}

}
