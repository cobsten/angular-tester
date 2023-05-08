import { Component } from '@angular/core';
import { ReviewService } from '../review.service';
import { Review } from '../reviews';

@Component({
  selector: 'app-comment-table',
  templateUrl: './comment-table.component.html',
  styleUrls: ['./comment-table.component.css']
})
export class CommentTableComponent {

  reviews!: Review[];
  constructor(private reviewService: ReviewService){}
  retrieveReviews() {
    this.reviewService.getData().subscribe((data) => {
      this.reviews = data;
    });
  }
}
