import { Component } from '@angular/core';
import { PostListItemComponent } from './post-list-item/post-list-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  posts = [
    {
      title: "Un petit coucou",
      content: "Un petit coucou de ta tata qui passait par la !",
      loveIts: -3
    },
    {
      title: "J'ai oublié",
      content: "J'ai oublié de te demander si tu viens avec nous à noël ? Ca nous ferait très plaisir !",
      loveIts: 0
    },
    {
      title: "Je nmflsdkfnez",
      content: "Lorem ipsum solor abet not pasta cosi de la muerte qui tuea la compagna.",
      loveIts: 0
    }
  ];

  constructor() {
  }

}
