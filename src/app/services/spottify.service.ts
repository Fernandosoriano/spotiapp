import { HttpClient, HttpHeaders } from '@angular/common/http'; // además del HttpClient, en esta parte importamos el HttpHeaders, ya que hay servicios que piden token o autenticacion , o piden mandar informaión de laguna manera, y para eso usamos los headers
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'
//@Injectable() si  este decorador aparce solamente así, sólo se puede hacer una instancia a lo largo de toda la aplicación, y para poder usar ese servicio, ocupas importar el servicio en el componente donde quieres usarlo, y además debes importarlo en el app.module.ts
@Injectable({
  providedIn: 'root' //al poner este decorador, no es necesario que en el app.module.ts importes el servicio, es una forma automática de importar servicios
})
export class SpottifyService {

  constructor(private http:HttpClient) { 
    console.log('Spotify service listo')
  }
  getQuery(query:string){
    const url =`https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders ({
      'Authorization': 'Bearer BQC0EARwaqQYf34wKQqRYfrjQV2RqRNxJa_-jOKjVyNH73q_UfZX-8xzp7l7b2UoAZ512Ka7ay-pcugVR1k'
    
    });
    return this.http.get(url,{headers});
  }
  getNewReleases(){
    // const headers = new HttpHeaders ({
    //   'Authorization': 'Bearer BQC0EARwaqQYf34wKQqRYfrjQV2RqRNxJa_-jOKjVyNH73q_UfZX-8xzp7l7b2UoAZ512Ka7ay-pcugVR1k'

    // });    // dentro especificamos todos los headers que la aplicaci+on necesita
// this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers}).subscribe(data=>{   al final de la petición agregamos los headers, al poner {headers}, y con esto ya podemos ver la data 
//   console.log(data);
// })
return this.getQuery('browse/new-releases').pipe( map(data => data['albums'].items));
// this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers}).pipe( map(data =>
//    data['albums'].items
// ));

  }
  getArtista(termino:string){
    // const headers = new HttpHeaders ({
    //   'Authorization': 'Bearer BQC0EARwaqQYf34wKQqRYfrjQV2RqRNxJa_-jOKjVyNH73q_UfZX-8xzp7l7b2UoAZ512Ka7ay-pcugVR1k'

    // });    
return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe( map(data => data['artists'].items));
// http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,{headers}).pipe( map(data => data['artists'].items));

  }
}
