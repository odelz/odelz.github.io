export interface PinImage {
    width: number
    height: number
    url: string
  }
  
  export interface PinMedia {
    media_type: string
    images: {
      '150x150': PinImage
      '400x300': PinImage
      '600x': PinImage
      '1200x': PinImage
    }
  }
  
  export interface Pin {
    id: string
    link: string
    title: string
    description: string
    dominant_color: string
    alt_text: string
    media: PinMedia
  }
  
  export interface PinterestResponse {
    items: Pin[]
    bookmark: string
  }