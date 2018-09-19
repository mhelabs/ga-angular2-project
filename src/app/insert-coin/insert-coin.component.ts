import { Component, OnInit } from '@angular/core';
import { BalanceService } from '../balance/balance.service';
import { ItemService } from '../item/item.service'
@Component({
  selector: 'app-insert-coin',
  templateUrl: './insert-coin.component.html',
  styleUrls: ['./insert-coin.component.scss'],
  providers: [],
 
})
export class InsertCoinComponent implements OnInit {
  credit : number;
  coinBalance = 0;
  constructor(public balanceService: BalanceService) { }
  
  // constructor(private itemService: ItemService) { 
  //   console.log(`constructor ran`);
  // }

  ngOnInit() {
    this.balanceService.onBalanceUpdated((balance) => {
      this.coinBalance = balance;
    });
  }

  // this.itemService.get().subscribe((items) =>{
  //   // console.log(items)
  //   this.items = items;
  // })

      onClick = function(amount){
    // console.log(this.coinBalance = 5)
    // console.log(this.coinBalance)
    this.balanceService.addBalance(amount);
    console.log(this.coinBalance)
     }

}
 