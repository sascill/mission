export type ProductCategory =
  | '전자기기'
  | '패션'
  | '홈리빙'
  | '식품'
  | '도서'

export type ProductStatus = '판매중' | '품절' | '판매중지'

export interface Product {
  id: string
  name: string
  category: ProductCategory
  price: number
  stock: number
  status: ProductStatus
  createdAt: string
}
