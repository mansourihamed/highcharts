import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  constructor() {}


  ngOnInit(): void {
    (async () => {

    const data = await fetch(
        'https://demo-live-data.highcharts.com/aapl-ohlc.json'
    ).then(response => response.json());


    // create the chart
    Highcharts.stockChart('container', {
        rangeSelector: {
            selected: 1
        },

        title: {
            text: 'AAPL Stock Price'
        },

        series: [{
            type: 'candlestick',
            name: 'AAPL Stock Price',
            data: data,
            dataGrouping: {
                units: [
                    [
                        'week', // unit name
                        [1] // allowed multiples
                    ], [
                        'month',
                        [1, 2, 3, 4, 6]
                    ]
                ]
            }
        }]
    });
})();
  }

  

}
