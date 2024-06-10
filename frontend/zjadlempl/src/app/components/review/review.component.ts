import { Component, input } from '@angular/core';
import { Review } from 'src/app/models/Review';
import { ActionsComponent } from '../actions/actions.component';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'app-review',
  standalone: true,
  templateUrl: './review.component.html',
  styleUrl: './review.component.css',
  imports: [ActionsComponent, RatingComponent],
})
export class ReviewComponent {
  review = input.required<Review>();
}
