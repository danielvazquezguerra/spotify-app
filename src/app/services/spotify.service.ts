import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  BEARER:string = 'BQCYTBwVugf393ySinhoy_Q6_kX9MJ-6udkOLkXpI6q2bQ_aO93cEbBP__JWhX1E1-ePaPeup8tEhF_R4rU';

  constructor(

    private http: HttpClient,
    ) { }

      getQuery(query:string) {

        const URL:string = `https://api.spotify.com/v1/${ query }`;
        const headers = new HttpHeaders({
          'Authorization':`Bearer ${this.BEARER}`
        })

        return this.http.get(URL, { headers });


      }

      getNewReleases() {

        return this.getQuery('browse/new-releases?limit=20')
          .pipe(map(data => data['albums'].items));
      }

      getArtist(termino:string) {

        return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
          .pipe(map( data => data['artists'].items));

      }


}

