import { Component } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';
import { Cart } from '../model/cart.model';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'store',
    templateUrl: 'store.component.html'
})
export class StoreComponent {

    public selectedCategory = null;
    public productsPerPage = 4;
    public selectedPage = 1;

    constructor(private repository: ProductRepository,
                private cart: Cart) { }

    get products(): Product[] {
        const productIndex = (this.selectedPage - 1) * this.productsPerPage;
        return this.repository.getProducts(this.selectedCategory)
            .slice(productIndex, productIndex + this.productsPerPage);
    }

    get categories(): string[] {
        return this.repository.getCategories();
    }

    changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
    }

    changePage(newPage: number) {
        this.selectedPage = newPage;
    }

    changePageSize(newSize: number) {
        this.productsPerPage = Number(newSize);     // parsing b/c the value passed from the template is a string
        this.changePage(1);
    }

    get pageNumbers(): number[] {
        return Array(Math.ceil(
            this.repository.getProducts(this.selectedCategory).length / this.productsPerPage ))
            .fill(0).map((x, i) => i + 1);
    }

    addProductToCart(product: Product) {
        this.cart.addLine(product);
    }

}
