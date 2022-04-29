import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MangasService {

  constructor(private http: HttpClient) {

  }

  getMangas(){
    var _url = 'https://cors-anywhere.herokuapp.com/https://api.myanimelist.net/v2/manga/ranking?limit=100';
    var bearerToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjEwMGVhMDAwOGJjY2UyYzFjY2JkZTk0ZGI0ZjNjNzkyMTQxMWU3NDRlYThkMGJiMDJlM2NiMjU5NGViNmI2ZjY0ZjZmOGI4ZWY1MzRjZDRmIn0.eyJhdWQiOiJjZjgxYzYwNTFmNjM3MTEzZjUzOWVlYjJlMzk0M2NkZSIsImp0aSI6IjEwMGVhMDAwOGJjY2UyYzFjY2JkZTk0ZGI0ZjNjNzkyMTQxMWU3NDRlYThkMGJiMDJlM2NiMjU5NGViNmI2ZjY0ZjZmOGI4ZWY1MzRjZDRmIiwiaWF0IjoxNjUxMjUzNzQ4LCJuYmYiOjE2NTEyNTM3NDgsImV4cCI6MTY1Mzg0NTc0OCwic3ViIjoiMTQ5NTY4OTIiLCJzY29wZXMiOltdfQ.QOMAz3sXnKPjYes8CQJiuqvy4vzj6kqAzWfopmeXN66krSAYuCiuhnxSf2M3M8dOameGJDXz5x-KoRrPTtuIXB4_rP22FozE4b3DWmk3MW4D8hmBJp18fJ9CVTaAkiL2u_ya2P1aa0I1826fAg8REJXXKqQt4slzMWTyB1Kw-gnSn06UNALqKuMsT2cr3OpsQu8YxhObrmKxmfeau0uzP-B2JivY1lvJIfAXJ6ymENA6ZVURCtj7nHOK4WJGKxofgSzMBDUvlftQEDuaQiUBad2yuOWWU0h_YHeSkCMUGecOcXjFIrXXZ9w18y8cgZbiA-XsIAj2qegE5IF9TJG5Fw'

    let header= new HttpHeaders().set('Content-Type', 'application/json').set('Authorization','Bearer '+bearerToken)
    return this.http.get(_url, {
      headers: header
    })

  }
}
