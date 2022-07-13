import { Injectable } from "@angular/core";
import { Product } from "./product";
import { Observable, from } from "rxjs";

@Injectable()
export class StaticDataSource {
  private products: Product[] = [
    new Product(1, "Product 1", "Kategoria 1", "Produkt 1 (Kategoria 1)", 100),
    new Product(2, "Product 2", "Kategoria 1", "Produkt 2 (Kategoria 1)", 100),
    new Product(3, "Product 3", "Kategoria 1", "Produkt 3 (Kategoria 1)", 100),
    new Product(4, "Product 4", "Kategoria 1", "Produkt 4 (Kategoria 1)", 100),
    new Product(5, "Product 5", "Kategoria 1", "Produkt 5 (Kategoria 1)", 100),
    new Product(6, "Product 6", "Kategoria 2", "Produkt 6 (Kategoria 2)", 100),
    new Product(7, "Product 7", "Kategoria 2", "Produkt 7 (Kategoria 2)", 100),
    new Product(8, "Product 8", "Kategoria 2", "Produkt 8 (Kategoria 2)", 100),
    new Product(9, "Product 9", "Kategoria 2", "Produkt 9 (Kategoria 2)", 100),
    new Product(10, "Product 10", "Kategoria 2", "Produkt 10 (Kategoria 2)", 100),
    new Product(11, "Product 11", "Kategoria 3", "Produkt 11 (Kategoria 3)", 100),
    new Product(12, "Product 12", "Kategoria 3", "Produkt 12 (Kategoria 3)", 100),
    new Product(13, "Product 13", "Kategoria 3", "Produkt 13 (Kategoria 3)", 100),
    new Product(14, "Product 14", "Kategoria 3", "Produkt 14 (Kategoria 3)", 100),
    new Product(15, "Product 15", "Kategoria 3", "Produkt 15 (Kategoria 3)", 100),
  ];

  getProduct(): Observable<Product[]> {
    return from([this.products]);
  }
}
