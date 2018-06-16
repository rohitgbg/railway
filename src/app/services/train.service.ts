import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable()
export class TrainService {

    private liveUrl = "";

    constructor(private _http: Http){

    }

    onSubmit(trainnumber:string, date:string){
        this.liveUrl = "https://api.railwayapi.com/v2/live/train/"+trainnumber+"/date/"+date+"/apikey/cczddk3pkj/";
        return this._http.get(this.liveUrl)
        .pipe(map(res => res.json()));
    }
    

}