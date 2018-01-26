import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../../services';
import { Observable } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  private movies: Observable<Array<any>>;
   
  constructor(private operations: OperationsService) { }

  ngOnInit() {
    this.onDocReady();
    this.getMovies();
  }

  onDocReady(){
    $(document).ready(function () {
        $(".browse").click(function () {
            $('#main').removeClass('use-sidebar2');
            $('#main').removeClass('use-sidebar1');
        });
        $(".genres").click(function () {
            $('#main').removeClass('use-sidebar2');
            $('#main').toggleClass('use-sidebar'); // Toggle
        });
        $(".year").click(function () {
            $('#main').removeClass('use-sidebar');
            $('#main').toggleClass('use-sidebar2'); // Toggle
        });

        $('.c_nav1 li').click(function () {
            $('li').removeClass("active");
            $(this).addClass("active");
        });

      });
  }

  getMovies(){
    this.movies = this.operations.get();
  }

}
