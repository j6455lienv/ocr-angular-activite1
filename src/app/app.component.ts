import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt \
  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \
  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse \
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa \
  qui officia deserunt mollit anim id est laborum.';

  posts = [
    {
      title: 'Post 1',
      content: this.lorem,
      loveIts: 2,
      created_at: new Date('2018,02,02'),
    },
    {
      title: 'Post 2',
      content: this.lorem,
      loveIts: -4,
      created_at: new Date('2018,03,03'),
    },
    {
      title: 'Post 3',
      content: this.lorem,
      loveIts: -3,
      created_at: new Date('2018,11,11'),
    },
    {
      title: 'Post 4',
      content: this.lorem,
      loveIts: 5,
      created_at: new Date('2017,12,31'),
    },
    {
      title: 'Post 5',
      content: this.lorem,
      loveIts: 0,
      created_at: new Date('2018,05,06'),
    }];


}
