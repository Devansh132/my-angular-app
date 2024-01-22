// generic-form.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.css']
})
export class GenericFormComponent implements OnInit {
  isNewItem: boolean = true; // Assume new item by default
  formData: any = {}; // Initialize form data object

  constructor(private route: ActivatedRoute, private itemService: ItemService) {}

  ngOnInit(): void {
    const itemId = this.route.snapshot.params['id'];
    if (itemId) {
      this.isNewItem = false;
      this.formData = this.itemService.getItemById(itemId) || {};
    }
  }

  submitForm(): void {
    if (this.isNewItem) {
      this.itemService.createItem(this.formData);
    } else {
      this.itemService.updateItem(this.formData);
    }
  }
}
