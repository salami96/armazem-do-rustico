import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/entities';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product;
  constructor(private route: ActivatedRoute, private pService: ProductService) {  }

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.pService.getProduct(res.id).subscribe(resp => {
        this.product = resp;
      });
    });
  }

}
