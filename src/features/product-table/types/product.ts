export type ProductCategory =
  | '전자기기'
  | '패션'
  | '홈리빙'
  | '식품'
  | '도서'

export const PRODUCT_STATUSES = {
  ON_SALE: '판매중',
  SOLD_OUT: '품절',
  DISCONTINUED: '판매중지',
} as const

export type ProductStatus =
  (typeof PRODUCT_STATUSES)[keyof typeof PRODUCT_STATUSES]

export interface Product {
  id: string
  name: string
  category: ProductCategory
  price: number
  stock: number
  status: ProductStatus
  createdAt: string
}
