import {Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit,OnChanges {


  @Input()
  rating: number = 0;

  @Output()
  ratingChange:EventEmitter<number> = new EventEmitter();

  stars: boolean[];

  @Input()
  public readonly:boolean;

  constructor() {
  }

  ngOnInit() {

  }

  starClick(i:number){
    if(!this.readonly){
      this.rating = i+1;
      this.ratingChange.emit(this.rating);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }

}
