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
}

interface Items {
  id: number,
  name: string,
  cost: number,
  remaining: number
}