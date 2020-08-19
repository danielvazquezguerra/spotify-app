import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {



  constructor(

    private http: HttpClient,
    ) { }


getNewReleases() {

  const URL:string = 'https://api.spotify.com/v1/browse/new-releases'

  const headers = new HttpHeaders({

    'Authorization':'Bearer BQBZBRnD-X-A7vAO1XXqmTPYvDelXUkv6OB11MtguuuZlJ1i9UjT5Hx4UWbBoBtSdiuxvgK0k2_LGMHMcFs'

  })

  return this.http.get( URL, { headers } );

}
}

