import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number = 0 ;
  createdAt: Date;

  constructor() { 
    this.createdAt = new Date();
  }

  ngOnInit() {
  }

  getColorState() {
    return this.loveIts >= 0;
  }

  loveIt() {
    this.loveIts++;
  }

  dontLoveIt() {
    this.loveIts--;
  }

}
