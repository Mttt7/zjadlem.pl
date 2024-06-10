export interface ReviewRequestDto {
  title: string;
  rating: number;
  city: string;
  comment: string;
  imageUrl?: string;
  googleMapsUrl?: string;
}
