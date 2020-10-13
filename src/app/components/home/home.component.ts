import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  paises: any[] = [];

  constructor(private http:HttpClient) { // 2 paso necesario para poder usar la información arrojada po rla petición http , en este componente de angular
    console.log('constructor del home hecho ')
  this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe((resp:any) =>{  //3 el subscribe sirve para jalar los datos, en la variable resp tienes disponible toda la información,  puede tener cualquier nombre esta variable  
  this.paises = resp;
    console.log(resp);
  })
   }

  ngOnInit(): void {
  }

}
