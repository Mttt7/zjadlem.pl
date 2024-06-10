import {
  Component,
  OnInit,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { LoaderComponent } from '../loader/loader.component';
import { sign } from 'crypto';
import { ReviewService } from 'src/app/services/review.service';
import { Review } from 'src/app/models/Review';
import { ReviewResponseDto } from 'src/app/models/ReviewResponseDto';
import { CommonModule } from '@angular/common';
import { ReviewComponent } from '../review/review.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [LoaderComponent, ReviewComponent],
})
export class HomeComponent implements OnInit {
  public loading = signal(false);

  reviews: WritableSignal<Review[]> = signal([]);

  constructor(private reviewService: ReviewService) {}

  ngOnInit(): void {
    this.reviewService.getReviews().subscribe((res) => {
      this.reviews.update((old) => [...old, ...res.content]);
    });
  }
}
