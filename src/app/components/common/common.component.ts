import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { Observable } from 'rxjs';
import { OperationsService , TimeService } from '../../services';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {

  private value: string;
  private tab: string;
  private data: Observable<Array<any>>;
  
  
  constructor(private route: ActivatedRoute ,
              private operations: OperationsService,
              private time: TimeService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.value = params['value']; // --> Name must match wanted parameter
      this.onDocReady();
      this.getMovies();
    });
  }

  onDocReady(){
      this.tab = 'browse';
      document.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
      });
  }

  getMovies(){
    this.data = this.operations.get();
    this.getDate_Time()
  }

  tabSelected(tab: string){
    this.tab = tab;
  }

  getClass(){
    if(this.tab == 'genres')
      return 'sidebar-at-left use-sidebar';
    else if(this.tab == 'year')
      return 'sidebar-at-left use-sidebar2';
    else
      return 'sidebar-at-left';    
  }

  getDate_Time(){
    this.time.getDate_Time();
    setTimeout(() => {
      this.getDate_Time();
    }, 1000);
  }
}
