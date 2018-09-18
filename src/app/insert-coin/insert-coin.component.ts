import { Component, OnInit } from '@angular/core';
import { BalanceService } from '../balance/balance.service';

@Component({
  selector: 'app-insert-coin',
  templateUrl: './insert-coin.component.html',
  styleUrls: ['./insert-coin.component.scss'],
  providers: []
})
export class InsertCoinComponent implements OnInit {
  credit : number;
  coinBalance = 0;
  constructor(public balanceService: BalanceService) { }
  

  ngOnInit() {
    this.balanceService.onBalanceUpdated((balance) => {
      this.coinBalance = balance;
    });
  }
    onClick= function(amount){
    // console.log(this.coinBalance = 5)
    // console.log(this.coinBalance)
     this.credit = this.coinBalance + amount
     console.log(`credit is`, this.credit)
    }
}
