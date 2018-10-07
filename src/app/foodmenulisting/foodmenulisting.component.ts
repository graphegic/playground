import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-foodmenulisting',
  templateUrl: './foodmenulisting.component.html',
  styleUrls: ['./foodmenulisting.component.css']
})
export class FoodmenulistingComponent implements OnInit {

  constructor(private _ledata: DataService) { }
  //also to add interface
  
   db:any;
  ngOnInit() {
   this.db = this._ledata.getData()
  }

}
