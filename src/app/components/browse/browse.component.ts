import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../../services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  private movies: Observable<Array<any>>;
   
  constructor(private operations: OperationsService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(){
    this.movies = this.operations.get();
  }

}
