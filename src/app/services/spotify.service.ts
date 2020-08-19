import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  BEARER:string = 'BQBzCokxLDlEx0xUPrPkF7cdj32zyN5XIeaicXtWzH8Po8mwVOICJ0VuhhgRGz-hjBFKnZn6LWe7WcuH-sE';

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

        const URL_SEARCH:string = `https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`;
        const headers = new HttpHeaders({
          'Authorization':`Bearer ${this.BEARER}`
        })
        return this.http.get( URL_SEARCH, { headers } )
          .pipe(map( data => data['artists'].items));
      }


}

