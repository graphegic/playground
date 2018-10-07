import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data-structure',
  templateUrl: './data-structure.component.html',
  styleUrls: ['./data-structure.component.css']
})
export class DataStructureComponent implements OnInit {
  
  db: any;
  constructor(private _ledata: DataService) { }

  ngOnInit() {

    this.db = JSON.stringify(this._ledata.getData(), null, 4)
  }

  
}
