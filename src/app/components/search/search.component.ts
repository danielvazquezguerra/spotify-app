import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  loading: boolean;

  artists: any[] = []; 

  constructor( private spotify:SpotifyService) { }

  ngOnInit(): void {
  }

  buscar(termino:string) {

    this.loading = true;
    console.log(termino);
    this.spotify.getArtists(termino)
    .subscribe( (data:any)=> {
      console.log(data);
      this.artists = data;
      this.loading = false;
      console.log(this.artists);
    })
  }

}
