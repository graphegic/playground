import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-itemdetails',
  templateUrl: './itemdetails.component.html',
  styleUrls: ['./itemdetails.component.css']
})
export class ItemdetailsComponent implements OnInit {

  constructor(private _ledata: DataService) { }


  //again interface
  db:any;
  ngOnInit() {
   this.db = this._ledata.getData()
  }

}
