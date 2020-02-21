import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TicketingService {
  private privateUrl = 'http://192.168.1.108:8080/api/v1/ticket';
constructor(private http: HttpClient) {
  this.getJSON().subscribe(data => {
      console.log(data);
  });
}

 getJSON(): Observable<any> {
  return this.http.get('../../assets/ticketing-data.json');
}  
postJSON(ticketing):Observable<any>{
  return this.http.post('../../assets/ticketing-data.json',ticketing);
}

 getAPI(): Observable<any> {
  return this.http.get(this.privateUrl);
}  
 postAPI(ticketing): Observable<any> {
  return this.http.post(this.privateUrl,ticketing);
}  
}
