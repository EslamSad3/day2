import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  cards: Array<any> = [
    {
      number: 1,
      background: 'white'
    },
    {
      number: 2,
      background: 'white'
    },
    {
      number: 3,
      background: 'white'
    },
    {
      number: 4,
      background: 'white'
    }
  ];
  
  ngOnInit() {
    for (let i = 0; i < this.cards.length; i++) {
      if (this.cards[i].number % 2 !== 0) {
        this.cards[i].background = 'black';
        this.cards[i].text = 'white'
      }
    }
  }
}
