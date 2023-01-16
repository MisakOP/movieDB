import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiKey } from 'src/config/config';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('dropDown') dropDown: any;
  title = 'movie-searching';
  moviesList = [];
  sortDropdownIsOpen = true;
  constructor(private http: HttpClient) { }
  ngOnInit() {      
    this.http.get<any>(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=1`).subscribe(data => {
        this.moviesList = data.results;
    })
  }
  changeSortDropDown(e:any) {
    this.sortDropdownIsOpen = e;
  }

  search(search: string) {
    this.http.get<any>(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`).subscribe(data => {
      this.moviesList = data.results;
  })
  this.dropDown.nativeElement.value = "popularity.desc";
  this.onSelectDropDown("popularity.desc");
  }

  onSelectDropDown(sortBy: string){
    if(sortBy === "popularity.desc"){
      this.moviesList.sort((a :any ,b: any) => (a.popularity < b.popularity) ?  1 : -1)
    }
    if(sortBy === "popularity.asc"){
      this.moviesList.sort((a :any ,b: any) => (a.popularity > b.popularity) ?  1 : -1)
    }
    if(sortBy === "vote_average.desc"){
      this.moviesList.sort((a :any ,b: any) => (a.vote_average < b.vote_average) ?  1 : -1)
    }
    if(sortBy === "vote_average.desc"){
      this.moviesList.sort((a :any ,b: any) => (a.vote_average > b.vote_average) ?  1 : -1)
    }
    if(sortBy === "primary_release_date.desc"){
      this.moviesList.sort((a :any ,b: any) => (a.release_date < b.release_date) ?  1 : -1)
    }
    if(sortBy === "primary_release_date.asc"){
      this.moviesList.sort((a :any ,b: any) => (a.release_date > b.release_date) ?  1 : -1)
    }
    if(sortBy === "title.desc"){
      this.moviesList.sort((a :any ,b: any) => (a.title < b.title) ?  1 : -1)
    }
    if(sortBy === "title.asc"){
      this.moviesList.sort((a :any ,b: any) => (a.title > b.title) ?  1 : -1)
    }
  }
}
