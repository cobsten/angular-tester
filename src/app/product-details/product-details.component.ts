import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  // product;

  constructor(private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute.snapshot);
    // this.product = this.activatedRoute.snapshot.data['state'].data;
  }
}
