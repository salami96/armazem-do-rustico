import { Component, OnInit } from '@angular/core';
import { FileInput } from 'ngx-material-file-input';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  nome: string;
  img: FileInput[] = null;
  files: File[];
  categoria = 'Mesas';
  loading = false;

  constructor() { }

  ngOnInit() {
  }

  setTitle(text: string) {
    this.categoria = text;
  }

  createProd() {
    this.loading = true;
  }

}
