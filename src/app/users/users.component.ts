import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
name : string = "Eslam";
img : string = "https://img.freepik.com/free-photo/beach-with-umbrella-summer-vacation-concept-generative-ai_60438-2518.jpg?w=826&t=st=1684587669~exp=1684588269~hmac=01412beae1b5aa882765b0057793583f7d168f119dac8a87d79cf4f0b34a3574";
alert(){
  alert(this.name)
}
isBtndis: Boolean = true
products:string[] = ["laptop","mobile","phone","mic"]
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
