import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';
import { BalanceService } from '../balance/balance.service';


@Component({
  selector: 'app-select-item',
  templateUrl: './select-item.component.html',
  styleUrls: ['./select-item.component.css']
})
export class SelectItemComponent implements OnInit {
  private inventory: any = [];
  message: string;
  constructor(public itemService : ItemService, public balanceService: BalanceService) { }

  ngOnInit() {
    this.itemService.get().subscribe( data => {
      this.inventory = data;
      console.log(this.inventory);
    })
  }

  setSelectedItem(item){
    this.itemService.setSelectedItem(item);
  }

  onDispenseItem(){
    console.log('onDispenseItem ran');
    if (!this.itemService.selectedItem){
      this.message = "Please select an item";
      return;
    }
    // console.log(this.itemService.getSelectedItem());
    console.log("this.balanceService.balance is ", this.balanceService.balance);
    if (!this.itemService.hasSufficientBalance(this.balanceService.balance)){
      this.message = "Insufficient Balance";
      return;
    } else if (!this.itemService.hasRemaining()){
        this.message = "No Inventory Remaining";
        return
    }
    const item = this.itemService.getSelectedItem();
    this.itemService.dispenseItem();
    this.balanceService.deductBalance(item.cost);
    this.message = "Enjoy your " + item.name;
  }

}
