import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-item',
  templateUrl: './select-item.component.html',
  styleUrls: ['./select-item.component.css']
})
export class SelectItemComponent implements OnInit {
  private inventory: any = [];
  constructor(public itemService : ItemService) { }

  ngOnInit() {
    this.itemService.get().subscribe( data => {
      this.inventory = data;
      console.log(this.inventory);
    })
  }

}
