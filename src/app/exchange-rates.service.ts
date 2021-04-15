import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ExchangeRatesService {
  url =
    'http://api.exchangeratesapi.io/v1/latest?access_key=64fa04d1e70e5e5b1b0d7a2bbfa3fbc3';
  constructor(private http: HttpClient) {}

  getExchangeRates(base: string, symbols: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('base', base);
    params = params.append('symbols', symbols);

    return this.http.get(this.url, { params });
  }
}
