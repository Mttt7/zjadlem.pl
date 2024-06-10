import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { ReviewResponseDto } from '../models/ReviewResponseDto';
import { ReviewRequestDto } from '../models/ReviewRequestDto';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  BASE_URL = process.env['NG_SERVER_URL'];
  pageNumber: Signal<number> = signal(0);

  constructor(private http: HttpClient) {}

  getReviews(): Observable<ReviewResponseDto> {
    return this.http.get<ReviewResponseDto>(
      `${this.BASE_URL}/reviews/?pageSize=10&pageNumber=${this.pageNumber()}`
    );
  }

  addReview(review: ReviewRequestDto) {
    return this.http.post(`${this.BASE_URL}/reviews/`, review);
  }
}
