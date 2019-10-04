import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id: string;
  constructor(private route: ActivatedRoute) {  }

  ngOnInit() {
    this.route.params.subscribe(res => {
      this.id = res.id;
    });
  }

}
