import { Component } from '@angular/core';
import {TrainService} from './services/train.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[TrainService]
})
export class AppComponent {
  title = 'app';
}
