import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private items: any[] = [];

  constructor() {}

  getItems(): any[] {
    return this.items;
  }

  getItemById(id: string): any | undefined {
    return this.items.find(item => item.id === id);
  }

  createItem(item: any): void {
    // For simplicity, generate a random ID.
    item.id = Math.random().toString(36).substring(2, 9);
    this.items.push(item);
    console.log('Item created:', item);
  }

  updateItem(item: any): void {
    const index = this.items.findIndex(existingItem => existingItem.id === item.id);
    if (index !== -1) {
      this.items[index] = item;
      console.log('Item updated:', item);
    } else {
      console.error('Item not found for update:', item);
    }
  }
}
