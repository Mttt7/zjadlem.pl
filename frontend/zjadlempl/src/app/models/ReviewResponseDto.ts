import { Review } from './Review';

export interface ReviewResponseDto {
  content: Review[];
  first: boolean;
  size: number;
}
