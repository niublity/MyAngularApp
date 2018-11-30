import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Stock, StockService } from "../stock.service";

@Component({
  selector: "app-stock-form",
  templateUrl: "./stock-form.component.html",
  styleUrls: ["./stock-form.component.css"]
})
export class StockFormComponent implements OnInit {
  private stockID: number;
  stock: Stock;

  constructor(private activeRoute: ActivatedRoute,private stockService:StockService
    ,private router:Router) {

  }

  ngOnInit() {
    this.stockID = this.activeRoute.snapshot.params["id"];
    this.stock = this.stockService.getStock(this.stockID);
  }


  Cancel():void{
    this.router.navigateByUrl("/stock")
  }

  Submit(): any {
    console.log(this.stock.rating);
    this.router.navigateByUrl("/stock")
  }
}
