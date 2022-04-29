import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api_project';

  constructor( router: Router){
  }

}
