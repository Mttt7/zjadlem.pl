export interface Review {
  id: string;
  title: string;
  rating: number;
  city: string;
  comment: string;
  imageUrl: string;
  authorId: string;
  authorUsername: string;
  likes: number;
  supports: number;
  googleMapsUrl: string;
  createdAt: Date;
  updatedAt: Date;
}
