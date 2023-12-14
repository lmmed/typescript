import { withId } from "../interfaces";

export abstract class PhoneBook<T extends withId> {
  items: T[];
  constructor() {
    this.items = [];
  }
  addItem(item: T) {
    this.items.push(item);
  }
  removeItem(item: T) {
    this.items = this.items.filter((i) => i.id !== item.id);
  }
  getItem(item: T) {
    return this.items.find((i) => i.id === item.id);
  }
  getAllItems() {
    return this.items;
  }
}
