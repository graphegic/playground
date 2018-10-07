import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-foodmenu',
  templateUrl: './foodmenu.component.html',
  styleUrls: ['./foodmenu.component.css']
})
export class FoodmenuComponent implements OnInit {
  constructor(private _ledata: DataService) { }
  //to add interface
   db:any;
  ngOnInit() {
   this.db = this._ledata.getData()
  }
  

  Crusts = [{
    name: "Fluffy",
    price: 5.40,
    Checked: false
  },
  {
    name: "Crisp",
    price: 7.50,
    Checked: false
  }
]



}
