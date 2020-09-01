import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  BEARER:string = 'BQD1vozv63lkupNaASDLZanpzcNkNUe92keWuN2C_N_SrpLjypJX4n1M5uBlGewKQblXnY0R4gKfczK5qB4';

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

      getArtists(termino:string) {

        return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
          .pipe(map( data => data['artists'].items));

      }

      getArtist(id:string) {

        return this.getQuery(`artists/${id}`)
          // .pipe(map( data => data['artists'].items));

      }



}

