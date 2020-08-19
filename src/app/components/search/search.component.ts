import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private spotify:SpotifyService) { }

  ngOnInit(): void {
  }

  buscar(termino:string) {
    console.log(termino);
    this.spotify.getArtist(termino)
    .subscribe( artist => {
      console.log(artist);
    })
  }

}
