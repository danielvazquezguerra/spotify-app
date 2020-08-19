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

  const headers = new HttpHeaders({
    'Authorization':'Bearer BQCbQ3SWjNPz10042q4MxFMe0kaiyMB1aONnTVDI_LyKLbNEztSfMMfahugir6YU1IMqFSY2YF7-UkuWB94'
  })
  this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers } )
  .subscribe( data => {
    console.log(data);
  })
}
}

