import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Review } from './reviews';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor(private client: HttpClient) {}

  getData(): Observable<Review[]> {
    return this.client.get<Review[]>('../assets/reviews.json').pipe(
      map((data) => {
        return data.map((item: Review) => {
          return {
            id: item.id,
            score: item.score,
            review_text: item.review_text,
          } as Review;
        });
      })
    );
  }
}
