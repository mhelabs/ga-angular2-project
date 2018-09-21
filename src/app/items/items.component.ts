import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service'
import { BalanceService } from '../balance/balance.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Items[];
  public selectedItem;

  constructor(private itemService: ItemService) {
    console.log(`constructor ran`)
   }

  ngOnInit() {
    console.log('ngOnit ran')
    this.itemService.onItemsRetrieved((items)=>{
      this.items=items
      console.log(items)
      // console.log(this.items)

    })  
    
  }
  onSelectionChange(item){
    // this.selectedItem = item
    // console.log('you selected', this.selectedItem)  
    // console.log(`We have only`, this.selectedItem.remaining, `items of`, this.selectedItem.name)
    this.itemService.setSelectedItem(item)
    console.log(`you selected`, item.name)

   }
}
 
interface Items {
  id: number,
  name: string,
  cost: number,
  remaining: number
}