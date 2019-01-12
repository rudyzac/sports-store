import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { StaticDataSource } from './static.datasource';

/**
 * Mediates access to (dummy) static data source, keeping the details of how the data has been obtained hidden.cl
 */
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

    /**
     * Return the product with the given id, or undefined if it can't be found.
     * @param {number} id - The id of the product you want to look for.
     */
    getProduct(id: number): Product {
        return this.products.find(x => x.id === id);
    }

    /**
     * Returns all the categories.
     */
    getCategories(): string[] {
        return this.categories;
    }

}
