import { Component, OnInit } from '@angular/core';
import { ExchangeRatesService } from './../exchange-rates.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private exchangeRates: ExchangeRatesService) {}
  title = 'interviewapp';
  EurPln: any;

  ngOnInit() {
    this.exchangeRates.getExchangeRates('EUR', 'PLN').subscribe((result) => {
      this.EurPln = result;
    });
  }
}
