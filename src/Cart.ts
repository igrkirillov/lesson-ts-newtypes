import Buyable from "./Buyable";

export default class Cart {
    private items: Buyable[] = [];

    addItem(item: Buyable): void {
        this.items.push(item);
    }

    getAll(): Buyable[] {
        return [...this.items];
    }
}