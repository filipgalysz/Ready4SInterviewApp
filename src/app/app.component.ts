import { Component } from '@angular/core';
import { ExchangeRatesService } from './exchange-rates.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private exchangeRates: ExchangeRatesService) {}
  title = 'interviewapp';
  EurPln: any;

  ngOnInit() {
    this.exchangeRates.getExchangeRates('EUR', 'PLN').subscribe((result) => {
      this.EurPln = result;
    });
  }
}
