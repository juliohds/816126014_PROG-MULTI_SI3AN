import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {

  slides = [
    {
      title: "Esse é o titulo do primeiro slide",
      description: "Goku SS",
      image:"assets/imgs/goku1.gif",
    },
    {
      title: "Professor me da nota1",
      description: "Goku SS2",
      image: "assets/imgs/goku2.gif",
    },
    {
      title: "Ionics é zica",
      description: "Goku SS3",
      image: "assets/imgs/goku3.gif",
    }
  ];
}


