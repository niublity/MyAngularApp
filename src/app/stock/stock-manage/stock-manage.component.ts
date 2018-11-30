import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Stock, StockService } from "../stock.service";
import { FormControl } from "@angular/forms";
import "rxjs/Rx";

@Component({
  selector: "app-stock-manage",
  templateUrl: "./stock-manage.component.html",
  styleUrls: ["./stock-manage.component.css"]
})
export class StockManageComponent implements OnInit {
  private stocks: Array<Stock>;

  private queryControl:FormControl;

  private keyWord:string;

  constructor(public router: Router, private stockService: StockService) {
      this.queryControl = new FormControl();
  }

  ngOnInit() {
      this.stocks = this.stockService.getStocks();
      this.queryControl.valueChanges
      .debounceTime(500)
      .subscribe(value=>
        {
          this.keyWord=value;
        });
  }

  Create() {
    this.router.navigateByUrl("/stock/0");
  }

  Update(stock: Stock) {
    this.router.navigateByUrl("/stock/" + stock.id);
  }
}
