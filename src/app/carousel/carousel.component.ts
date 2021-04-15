import { Component, OnInit } from '@angular/core';
import { ExchangeRatesService } from '../exchange-rates.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  public allCurrencies: Currencies[] = [
    {
      base: 'EUR',
      symbols: 'PLN',
      value: 0,
    },
    {
      base: 'USD',
      symbols: 'GBP',
      value: 0,
    },
    {
      base: 'CAD',
      symbols: 'CHF',
      value: 0,
    },
  ];
  public index = 0;
  public slides = [
    { img: 'http://placekitten.com/g/1920/1080' },
    { img: 'http://placekitten.com/g/1919/1080' },
    { img: 'http://placekitten.com/g/1918/1080' },
  ];
  public slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  constructor(private exchangeRates: ExchangeRatesService) {}

  addSlide() {
    this.slides.push({ img: 'http://placehold.it/350x150/777777' });
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  afterChange(e: any) {}

  beforeChange(e: any) {
    if (this.index == 2) {
      this.index = 0;
    } else {
      this.index++;
    }
    this.getAllCurrencies();
  }

  getAllCurrencies() {
    const data = this.allCurrencies[this.index];
    this.exchangeRates
      .getExchangeRates(data.base, data.symbols)
      .subscribe((res) => {
        this.allCurrencies[this.index].value = res.rates[data.symbols];
      });
  }

  ngOnInit(): void {
    this.getAllCurrencies();
  }
}
export interface Currencies {
  base: string;
  symbols: string;
  value: number;
}
