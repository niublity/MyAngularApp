import { Pipe, PipeTransform } from '@angular/core';
import { Stock } from './stock.service';

@Pipe({
  name: 'stockfilter'
})
export class StockfilterPipe implements PipeTransform {

  transform(stocks: Stock[],field:string,keyWord:string): any {
    if(!field || !keyWord){
      return stocks;
    }
    return stocks.filter(stock=>stock[field].indexOf(keyWord)>-1);
  }

}
