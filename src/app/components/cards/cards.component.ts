import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

 @Input() items: any[] = [];

  constructor() { }

  verArtista(item:any) {

    let artistId;

    if ( item.type === 'artist' ) {
      artistId = 'artist ' + item.id;
    }else {
      artistId = 'artistArray ' + item.artists[0].id
    }

    console.log(artistId);

  }

}
