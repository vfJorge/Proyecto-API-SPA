import { Component, OnInit } from '@angular/core';
import { AnimesService } from '../services/animes.service';

@Component({
  selector: 'app-api4',
  templateUrl: './api4.component.html',
  styleUrls: ['./api4.component.css']
})
export class Api4Component implements OnInit {
  filteredString: string = '';
  public page: number = 1;
  public AnimesRecibidos: Array<any> = [];
  

  constructor(private animesService: AnimesService){
    this.animesService.getAnimes().subscribe((resp: any) => {
    console.log(resp);
    this.AnimesRecibidos = resp.data;
  })
  }


  ngOnInit(): void {
  }

}
