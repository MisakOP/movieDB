import { Component, Input } from '@angular/core';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  @Input() data: any;
  image = '';
  title = '';
  date = '';
  ngOnInit () {
    this.image = `https://image.tmdb.org/t/p/w220_and_h330_face${this.data.backdrop_path}`
    this.title = this.data.title;
    const date = new Date(this.data.release_date)
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    const year = date.getFullYear();
    this.date = `${month} ${day},${year}`;
  }
}
