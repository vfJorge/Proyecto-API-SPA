import { Component, OnInit } from '@angular/core';
import { AnimesService } from '../services/animes.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api4',
  templateUrl: './api4.component.html',
  styleUrls: ['./api4.component.css']
})
export class Api4Component implements OnInit {
  filteredString: string = '';
  public page: number = 1;
  public AnimesRecibidos: Array<any> = [];
  

  constructor(private animesService: AnimesService, private http: HttpClient){
    this.animesService.getAnimes().subscribe((resp: any) => {
    this.AnimesRecibidos = resp.data;
  })
  }


  ngOnInit(): void {
    this.http.post<any>('https://reqres.in/api/posts', { title: 'Angular POST Request Example' }).subscribe(data => {
        
    })
  }

}
