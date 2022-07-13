import { Component } from "@angular/core";
import { Product } from "../Models/product";
import { ProductRepository } from "../Models/product.repository";

@Component({
  selector: "store",
  templateUrl: "store.component.html"
})

export class StoreComponent {

  constructor(private repository: ProductRepository) { }

  public selectedCategory = null;
  public productPerPage = 6;
  public selectedPage = 1;

  get products(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productPerPage;

    return this.repository.getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productPerPage);
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
    this.productPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageCount(): number {
    return Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productPerPage);
  }

  //get pageNumbers(): number[] {
  //  return Array(Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productPerPage))
  //    .fill(0).map((x, i) => i + 1);
  //}
}
