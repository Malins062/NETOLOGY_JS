export interface ShortService {
  id: number;
  name: string;
  price: number;
}

export interface DetailsService extends ShortService {
  content: string;
}