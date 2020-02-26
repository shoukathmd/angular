import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TicketingService {
  // private privateUrl = '/api/v1/ticket';
  private privateUrl = 'http://localhost:8080/api/v1/ticket';

  constructor(private http: HttpClient) {
    // this.getJSON().subscribe(data => {
    //   console.log(data);
    // });
  }



  getAPI(): Observable<any> {
    return this.http.get(this.privateUrl);
  }



  postAPI(ticketing) {
    return this.http.post<any>(this.privateUrl, ticketing).subscribe();
  }
  putAPI(ticketing) {
    return this.http.put<any>(this.privateUrl + "/" + ticketing['id'] , ticketing);
  }
}
