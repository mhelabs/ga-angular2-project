import { Component, OnInit } from '@angular/core';
import { BalanceService } from '../balance/balance.service';
import { ItemService } from '../item/item.service';

@Component({
  selector: 'app-dispense',
  templateUrl: './dispense.component.html',
  styleUrls: ['./dispense.component.css']
})
export class DispenseComponent implements OnInit {

  constructor(public balanceService: BalanceService, public itemService: ItemService) {
  }

  ngOnInit() {
  
  }


   



  onDispenseItem = function () {
    console.log(`click`)
    //  console.log(`You chose`, this.itemService.setSelectedItem)
    //  this.itemService.setSelectedItem 
     // console.log(`Your credit is `, this.balanceService.getBalance())
    let currentBalance = this.balanceService.getBalance()
    console.log(`current balance is`, currentBalance)
    this.itemSelected()
    
    if (this.hasSufficientBalance(currentBalance)== true){
      if(this.itemAvailable==true){
      return this.itemService.dispenseItem((item)=>{
        console.log(`Enjoy the`, item.name)
        this.balanceService.deductBalance(item.cost)
    }
  }
} 
    // console.log(`item cost is `,this.itemService.setSelectedItem.cost)
    // this.itemService.dispenseItem()
     // if((this.balanceService.setBalance >= this.itemService.setSelectedItem.cost) &&
    // (this.itemService.remaining >= this.itemService.setSelectedItem.remaining)){
    //   console.log(`you can buy this`)
    //   return 
    // } else {
    //   console.log(`Add more coins please`)
    //  this.itemService.setSelectedItem = this.selectedItem
    // console.log(` selectedItems is`, this.selectedItem)
    // }
    //  this.itemService.dispenseItem()
   }

  itemSelected(){
    let selectItem = this.itemService.getSelectedItem()
    if (!selectItem){
      console.log(`please select an item`)
    }else{
      console.log(`Item Selected for Dispensing is`, selectItem.name)
      return selectItem
  }
    }
  
    itemAvailable(item) {
      let isAvailable = this.itemService.hasRemaining()
      if(!isAvailable){
        console.log(`No More item available, please select another Available item`)
      } else {
        console.log(`Item is available`)
        return isAvailable
      }
     }

  hasSufficientBalance(currentBalance) {
    let sufficientBalance = this.itemService.hasSufficientBalance(currentBalance) 
      if (!sufficientBalance){
        console.log(`Please add more coins`)
      }else{
        console.log(this.itemService.hasSufficientBalance(currentBalance)) 
        return sufficientBalance
      } 
    
    }

}



