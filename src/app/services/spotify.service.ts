import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  BEARER:string = 'BQDiXsWKC_Nd9M20GcxdXNRmNXhg1u1QidExvB2ZuYJwkcIx4aL0iWRjMP47G3yc1x9irHuM3aqxhYLhWGk';

  constructor(

    private http: HttpClient,
    ) { }


getNewReleases() {
  const URL:string = 'https://api.spotify.com/v1/browse/new-releases'
  const headers = new HttpHeaders({
    'Authorization':`Bearer ${this.BEARER}`
  })
  return this.http.get( URL, { headers } )
    .pipe(map(data => {
      return data['albums'].items;
    }))
}

getArtist(termino:string) {

  const URL_SEARCH:string = `https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`;
  const headers = new HttpHeaders({
    'Authorization':`Bearer ${this.BEARER}`
  })
  return this.http.get( URL_SEARCH, { headers } );
}


}

