import { Component, OnInit, signal } from '@angular/core';
import {
  AbstractControl,
  Form,
  FormControl,
  FormGroup,
  FormsModule,
  PristineChangeEvent,
  ReactiveFormsModule,
  StatusChangeEvent,
  TouchedChangeEvent,
  ValidationErrors,
  ValidatorFn,
  Validators,
  ValueChangeEvent,
} from '@angular/forms';
import { toast } from 'ngx-sonner';
import { title } from 'process';
import { ReviewService } from 'src/app/services/review.service';
import { SupabaseService } from 'src/app/services/supabase.service';
import { LoaderComponent } from '../loader/loader.component';
import { ReviewRequestDto } from 'src/app/models/ReviewRequestDto';

@Component({
  selector: 'app-add-new-review',
  standalone: true,
  templateUrl: './add-new-review.component.html',
  styleUrl: './add-new-review.component.css',
  imports: [ReactiveFormsModule, FormsModule, LoaderComponent],
})
export class AddNewReviewComponent implements OnInit {
  reviewForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    city: new FormControl('', [Validators.required, Validators.minLength(3)]),
    comment: new FormControl('', [
      Validators.required,
      Validators.minLength(30),
    ]),
    rating: new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.max(10),
      ratingValidator(),
    ]),
    googleMapsUrl: new FormControl(''),
    imageUrl: new FormControl(''),
  });

  loading = signal(false);

  constructor(
    private reviewService: ReviewService,
    private supabase: SupabaseService
  ) {}

  ngOnInit(): void {}

  submitReview() {
    if (this.reviewForm.valid) {
      this.reviewService
        .addReview(this.reviewForm.value as ReviewRequestDto)
        .subscribe((res: any) => {
          console.log(res);
        });

      toast.success('Review submitted successfully!');
    } else {
      toast.error('Niepoprawne dane! 😢');
    }
  }

  uploadImage($event: Event) {
    this.loading.set(true);
    this.supabase.uploadImage($event).then((url) => {
      if (url != '') {
        this.loading.set(false);
        this.reviewForm.controls['imageUrl'].setValue(url);
        toast.success('Image uploaded successfully!');
      }
    });
  }
}

function ratingValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null; // Nie waliduj, jeśli pole jest puste
    }
    const value = control.value;
    const isValidNumber = /^(\d(\.\d)?)$|^(10(\.0)?)$/.test(value);
    if (!isValidNumber) {
      toast.error(
        'Ocena musi być w przedziale 1-10 z maksymalnie jednym miejscem po przecinku.'
      );
      return {
        invalidRating:
          'Rating must be between 1 and 10 with at most one decimal place.',
      };
    }
    return null;
  };
}
