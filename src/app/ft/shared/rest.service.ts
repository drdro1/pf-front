import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class RestService {
  endpoint = 'http://localhost:3000/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    const body = res;
    console.log('the extracted data = ' + body);
    return body || { };
  }

  getProducts(): Observable<any> {
    return this.http.get(this.endpoint + 'products').pipe(
      map(this.extractData));
  }

  getFundSearch(): Observable<any> {
    return this.http.get(this.endpoint + 'fundSearch').pipe(
      map(this.extractData));
  }

  getFundInfoForOrder(id): Observable<any> {
    console.log('issuingCall: ' + this.endpoint + 'fundInfoForOrder?id=' + id);
    return this.http.get(this.endpoint + 'fundInfoForOrder?id=' + id).pipe(
      map(this.extractData));
  }
}
