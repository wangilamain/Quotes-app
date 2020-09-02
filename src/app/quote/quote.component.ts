import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'A pessimist sees difficulty in every opportunity.An optimist sees opportunity in every difficulty', 'anonymous', new Date(2020,4,21)),
    new Quote(2, 'You learn more from failure than from success', 'Sharon', new Date(2019,14,16)),
    new Quote(3, 'Its not whether you get knocked down,its whether you get up', 'Vince Lombardi', new Date(2020,1,11)),
    new Quote(4, 'The man who has confidence in himself gains confidence from others', 'Hasidic', new Date(2020,12,8))
  ];

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }


  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  addVote(quote, index) {
    if (quote) {
      this.quotes[index].upvote += 1;
    }
  }
  lessVote(quote, index) {
    if (quote) {
      this.quotes[index].downvote += 1
    }
  }
  initNum: number
  finNum: number
  counter: number

  mostLiked() {
    this.initNum = 0
    this.finNum = 0
    for (this.counter = 0; this.counter < this.quotes.length; this.counter++) {
      this.finNum = this.quotes[this.counter].upvote;

      if (this.finNum > this.initNum) {
        this.initNum = this.finNum
      }



    }

    return this.initNum;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
