import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})


export class ApiService {
 API_KEY = 'YOUR_API_KEY';

  constructor(private httpClient: HttpClient) { }



   public getNews(){
    return this.httpClient.get(`http://192.168.0.7:1000/angulardata/policy/indexapi.php`, { headers: {'Content-Type': 'application/json','Access-Control-Allow-Headers':'Content-Type'} });

  }
}