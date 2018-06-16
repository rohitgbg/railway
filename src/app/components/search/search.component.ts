import { Component } from '@angular/core';
import {TrainService} from '../../services/train.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
})
export class SearchComponent {

  searchStr:string;
  dateStr:string;
  trainResult:any;
  trainName:any;
  allRoutes:any;
  trainPosition:any;
  

   

  constructor(private _trainservice:TrainService){

  }

  onSubmit(){
    console.log(this.dateStr);
    this._trainservice.onSubmit(this.searchStr, this.dateStr).subscribe(res=>{
      this.trainResult = res.current_station;
      this.trainName = res.train.name;
      this.allRoutes = res.route;
      this.trainPosition = res.position;
    });
  }

}
