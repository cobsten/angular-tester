import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { books } from '../books';
import { Product, products } from '../products';
import { ReviewService } from '../review.service';
import { Review } from '../reviews';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] = [];
  path: String | null;
  reviews!: Review[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private reviewService: ReviewService
  ) {
    this.path = activatedRoute.snapshot.url
      .map((segment) => segment.path)
      .join('/');
    this.findProducts(this.path);
  }

  findProducts(path: String) {
    switch (path) {
      case 'books':
        this.products = books;
        break;
      default:
        console.log('There is nothing');
    }
  }

  retrieveReviews() {
    this.reviewService.getData().subscribe((data) => {
      this.reviews = data;
    });
  }
  goToDetail(product: Product) {
    const data = { item: product };
    this.router.navigate(['/' + this.path, product.id], { state: data });
  }
  share() {
    window.alert('The product has been shared!');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
