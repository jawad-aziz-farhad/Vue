import { Component,  Input } from '@angular/core';

@Component({
  selector: 'data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent  {

  @Input() items: Array<any> = [];
  private defulatImg: string;

  constructor() { 
    this.defulatImg = "assets/images/banner-placeholder.png";
  }
}
