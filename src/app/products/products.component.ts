import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title = 'Todos os Móveis';
  constructor() { }

  ngOnInit() {
  }

  setTitle(text: string) {
    this.title = text;
  }

}
