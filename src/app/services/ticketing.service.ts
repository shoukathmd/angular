import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ticketing} from "../models/ticketing-model";

@Injectable({
  providedIn: 'root'
})
export class TicketingService {
  private privateUrl = '/api/v1/ticket';

  constructor(private http: HttpClient) {
    // this.getJSON().subscribe(data => {
    //   console.log(data);
    // });
  }



  getAPI(): Observable<any> {
    return this.http.get(this.privateUrl);
  }



  postAPI(ticketing: Ticketing) {
    return this.http.post(this.privateUrl, ticketing);
  }
}
