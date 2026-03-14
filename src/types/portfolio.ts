export interface PortfolioItem {
  id: string
  category: 'commercial' | 'residential'
  title: string
  subtitle?: string
  thumbnail: string
  images: string[]
}

export interface Category {
  key: 'commercial' | 'residential'
  label: string
  description: string
}