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
      description: "Essa é a <b>Descrição</b> Hahaha.",
      image:"assets/imgs/Akuma3.gif",
    },
    {
      title: "Professor me da nota",
      description: "<b>SÃO 4 HORAS DA MANHÃ</b> socorro ;-;",
      image: "assets/imgs/Akuma2.gif",
    },
    {
      title: "Ionics é zica",
      description: "essa é a terceira",
      image: "assets/imgs/Akuma1.gif",
    }
  ];
}


