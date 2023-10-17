export interface ISBN {
    isbn: string
    title: string
    subtitle: any
    authors: string[]
    publisher: string
    synopsis: string
    dimensions: Dimensions
    year: number
    format: string
    page_count: number
    subjects: string[]
    location: string
    retail_price: any
    cover_url: any
    provider: string
  }
  
  export interface Dimensions {
    width: number
    height: number
    unit: string
  }