export interface ISBN {
  isbn: string;
  title: string;
  subtitle: unknown;
  authors: string[];
  publisher: string;
  synopsis: string;
  dimensions: Dimensions;
  year: number;
  format: string;
  page_count: number;
  subjects: string[];
  location: string;
  retail_price: unknown;
  cover_url: unknown;
  provider: string;
}

export interface Dimensions {
  width: number;
  height: number;
  unit: string;
}
