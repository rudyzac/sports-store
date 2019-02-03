import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { createHostListener } from '@angular/compiler/src/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

/**
 *  Since there should be a single Cart object throughout the entire application, the Cart is a service.
 *  This way, Angular will take responsibility for creating an instance of the Cart class and will use it
 *  when it needs to create a component that has a Cart constructor argument.
 */
@Injectable()
export class Cart {
    public lines: CartLine[] = [];
    public itemCount: number = 0;
    public cartPrice: number = 0;

    addLine(product: Product, quantity: number = 1) {            
        let line = this.lines.find(line => line.product.id === product.id);

        if (line !== undefined) {
            line.quantity += quantity;
        } else {
            this.lines.push(new CartLine(product, quantity));
        }

        this.recalculate();
    }

    updateQuantity(product: Product, quantity: number) {
        let line = this.lines.find(line => line.product.id === product.id);

        if(line != undefined) {
            line.quantity = Number(quantity);
        }

        this.recalculate();
    }

    removeLine(id: number) {
        let index = this.lines.findIndex(line => line.product.id === id);
        this.lines.splice(index, 1);
        this.recalculate();
    }

    clear() {
        this.lines = [];
        this.itemCount = 0;
        this.cartPrice = 0;
    }

    private recalculate() {
        this.itemCount = 0;
        this.cartPrice = 0;
        this.lines.forEach(l => {
            this.itemCount += l.quantity;
            this.cartPrice += (l.quantity * l.product.price);
        });
    }

}

export class CartLine {

    constructor(public product: Product, public quantity: number) {}

    get lineTotal() {
        return this.quantity * this.product.price;
    }
    
}
