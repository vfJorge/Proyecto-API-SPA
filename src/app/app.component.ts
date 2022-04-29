import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api_project';
  modalInterior = '';
  modalTitleString = '';
  comment = "<p><em><strong>abc</strong></em></p>";

  public isVisible = false;
  isConfirmLoading = false;

  constructor( router: Router){
  }

  showModal(): void {
    this.isVisible = true;
    this.modalTitleString = 'Login';
    this.modalInterior = '<router-outlet><app-login></app-login></router-outlet>';
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 1000);
  }

  public closeModal(): void {
    this.isVisible = false;
  }
}
