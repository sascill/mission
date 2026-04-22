import {
  PRODUCT_STATUSES,
  type Product,
  type ProductCategory,
  type ProductStatus,
} from '../types/product'

interface ProductSeed {
  name: string
  category: ProductCategory
  basePrice: number
}

const productSeeds: ProductSeed[] = [
  { name: '무선 블루투스 이어폰', category: '전자기기', basePrice: 129000 },
  { name: '기계식 키보드', category: '전자기기', basePrice: 99000 },
  { name: '오버핏 후드 집업', category: '패션', basePrice: 69000 },
  { name: '세라믹 머그컵 세트', category: '홈리빙', basePrice: 25000 },
  { name: '유기농 그래놀라', category: '식품', basePrice: 15800 },
  { name: '프리미엄 스탠드 조명', category: '홈리빙', basePrice: 87000 },
  { name: '러닝화 라이트', category: '패션', basePrice: 112000 },
  { name: '타이포그래피 포스터 북', category: '도서', basePrice: 32000 },
  { name: '휴대용 보조배터리', category: '전자기기', basePrice: 45000 },
  { name: '클래식 노트 세트', category: '도서', basePrice: 18000 },
  { name: '4K 웹캠', category: '전자기기', basePrice: 76000 },
  { name: '노이즈 캔슬링 헤드폰', category: '전자기기', basePrice: 159000 },
  { name: '클래식 데님 자켓', category: '패션', basePrice: 88000 },
  { name: '미니 크로스백', category: '패션', basePrice: 54000 },
  { name: '원목 수납 선반', category: '홈리빙', basePrice: 64000 },
  { name: '아로마 디퓨저', category: '홈리빙', basePrice: 39000 },
  { name: '콜드브루 원액 세트', category: '식품', basePrice: 21900 },
  { name: '견과류 에너지바', category: '식품', basePrice: 12800 },
  { name: 'UX 라이팅 가이드', category: '도서', basePrice: 28500 },
  { name: '프론트엔드 아키텍처 입문', category: '도서', basePrice: 34800 },
]

const formatDate = (date: Date) => {
  const year = date.getUTCFullYear()
  const month = String(date.getUTCMonth() + 1).padStart(2, '0')
  const day = String(date.getUTCDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

const getStatus = (index: number): ProductStatus => {
  if (index % 10 === 2 || index % 10 === 7) {
    return PRODUCT_STATUSES.SOLD_OUT
  }

  if (index % 10 === 4) {
    return PRODUCT_STATUSES.DISCONTINUED
  }

  return PRODUCT_STATUSES.ON_SALE
}

const getStock = (status: ProductStatus, index: number) => {
  if (status === PRODUCT_STATUSES.SOLD_OUT) {
    return 0
  }

  if (status === PRODUCT_STATUSES.DISCONTINUED) {
    return 4 + ((index * 3) % 11)
  }

  return 8 + ((index * 7) % 58)
}

export const products: Product[] = Array.from({ length: 100 }, (_, index) => {
  const seed = productSeeds[index % productSeeds.length]
  const batch = Math.floor(index / productSeeds.length)
  const status = getStatus(index)
  const createdAt = new Date(Date.UTC(2026, 0, 1 + index))

  return {
    id: `P-${1001 + index}`,
    name: batch === 0 ? seed.name : `${seed.name} ${batch + 1}`,
    category: seed.category,
    price: seed.basePrice + batch * 2500 + (index % 4) * 1200,
    stock: getStock(status, index),
    status,
    createdAt: formatDate(createdAt),
  }
})
