import { HttpClient, HttpHeaders } from '@angular/common/http'; // además del HttpClient, en esta parte importamos 
                                                                // el HttpHeaders, ya que hay servicios que piden 
                                                                // token o autenticacion, o piden mandar informaión 
                                                                // de alguna manera, y para eso usamos los headers
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
      'Authorization': 'Bearer BQAMUuxoKep9JqHtQQlKxGJpit_yV8Qa_np20Mvuaqpzryn2rZkFX6U1N0yzWkZdqsC1e634Ia6KYjCaXrX7KDB7MF8d8A-hSc43RdRhIqJWjEhZk6z34x-zShCGiTCWXT9gaXhohKTV0HRxKXqTCsBn2KHvSEs8tYEFJVVy5j9SgGB7Z3L6vgl3dWOE0y0G2wrCtnvD3SHdihRIaHGtlfO-Tau-zVhWj9RrIsh4ld_FU1SiaNMuHp0vI7aWWcER8WdALQ3e_zIiDXqPThZczTM_vU10pIPQ'
    
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
return this.getQuery('browse/new-releases').pipe(map(data => data['albums'].items));
// this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers}).pipe( map(data =>
//    data['albums'].items
// ));

  }
  getArtistas(termino:string){
    // const headers = new HttpHeaders ({
    //   'Authorization': 'Bearer BQC0EARwaqQYf34wKQqRYfrjQV2RqRNxJa_-jOKjVyNH73q_UfZX-8xzp7l7b2UoAZ512Ka7ay-pcugVR1k'

    // });    
return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe( map(data => data['artists'].items));
// http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,{headers}).pipe( map(data => data['artists'].items));

  }
  getArtista(id:string){
      
return this.getQuery(`artists/${id}`);
// .pipe( map(data => data['artists'].items));

  }
  getTopTracks(id:string){
      
    return this.getQuery(`artists/${id}/top-tracks?market=us`).pipe( map(data => data['tracks']));
    
      }
}
