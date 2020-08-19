import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  BEARER:string = 'BQAQgS6-SUu-QAVrLPQs7-ld9OX39FaO7_iLzqLoXMrbMUxADGIT_ypzipBUxRDSHmZKrA_x_bxXmoT5jVY';

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

