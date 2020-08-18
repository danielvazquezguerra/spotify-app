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
    'Authorization':'Bearer BQCyl6iq1HnMWLjh5hmW6yDAQxTS8FnCXptEr9HS68PjSM0kWwHG1ZzY2L8OAW4B9j0a0pd2YVYQBhufupY'
  })
  this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers } )
  .subscribe( data => {
    console.log(data);
  })
}
}

