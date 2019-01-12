import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class ProductRepository {

    private products: Product[] = [];
    private categories: string[] = [];

    constructor(private dataSource: StaticDataSource) {
        dataSource.getProducts().subscribe(data => {
            this.products = data;
            this.categories = data.map(p => p.category)     // Create a new array holding categories
                .filter((c, index, array) => array.indexOf(c) === index)   // Remove duplicates
                .sort();
        });
    }

    /**
     * Returns all the products of a given category.
     * @param {string} category - The category whose products must be returned. If null, all the products are returned.
     */
    getProducts(category: string = null): Product[] {
        return this.products.filter(p => category === p.category || category === null);
    }

}
