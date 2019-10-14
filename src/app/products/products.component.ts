import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/entities';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title = 'Todos os Móveis';
  products: Product[];
  constructor(private pService: ProductService) { }

  ngOnInit() {
    this.pService.getProducts().subscribe(resp => this.products = resp);
  }

  setTitle(text: string) {
    this.title = text;
  }

}
