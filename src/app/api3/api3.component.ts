import { Component, OnInit } from '@angular/core';
import { MangasService } from '../services/mangas.service';

@Component({
  selector: 'app-api3',
  templateUrl: './api3.component.html',
  styleUrls: ['./api3.component.css']
})
export class Api3Component implements OnInit {
  filteredString: string = '';
  public page: number = 1;
  public MangasRecibidos: Array<any> = [];
  

  constructor(private mangasService: MangasService){
    this.mangasService.getMangas().subscribe((resp: any) => {
    this.MangasRecibidos = resp.data;
  })
  }


  ngOnInit(): void {
  }

}
