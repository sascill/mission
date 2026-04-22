import {
  PRODUCT_STATUSES,
  type Product,
} from '../../../features/product-table/types/product'
import type { SummaryCard } from '../types/dashboard'

export const DASHBOARD_PAGE_SIZE = 10

interface SummaryCounts {
  total: number
  onSale: number
  soldOut: number
  discontinued: number
}

const getSummaryCounts = (products: Product[]): SummaryCounts => {
  return products.reduce(
    (counts, product) => {
      if (product.status === PRODUCT_STATUSES.ON_SALE) {
        counts.onSale += 1
      }

      if (product.status === PRODUCT_STATUSES.SOLD_OUT) {
        counts.soldOut += 1
      }

      if (product.status === PRODUCT_STATUSES.DISCONTINUED) {
        counts.discontinued += 1
      }

      return counts
    },
    {
      total: products.length,
      onSale: 0,
      soldOut: 0,
      discontinued: 0,
    },
  )
}

const createSummaryCards = (counts: SummaryCounts): SummaryCard[] => {
  return [
    {
      label: '전체 상품',
      tone: 'total',
      value: counts.total,
    },
    {
      label: PRODUCT_STATUSES.ON_SALE,
      tone: 'on-sale',
      value: counts.onSale,
    },
    {
      label: PRODUCT_STATUSES.SOLD_OUT,
      tone: 'sold-out',
      value: counts.soldOut,
    },
    {
      label: PRODUCT_STATUSES.DISCONTINUED,
      tone: 'discontinued',
      value: counts.discontinued,
    },
  ]
}

export const createDashboardViewModel = (
  products: Product[],
  currentPage: number,
) => {
  const summaryCounts = getSummaryCounts(products)
  const totalPages = Math.ceil(summaryCounts.total / DASHBOARD_PAGE_SIZE)
  const startIndex = (currentPage - 1) * DASHBOARD_PAGE_SIZE
  const paginatedProducts = products.slice(
    startIndex,
    startIndex + DASHBOARD_PAGE_SIZE,
  )

  return {
    productCount: summaryCounts.total,
    summaryCards: createSummaryCards(summaryCounts),
    paginatedProducts,
    totalPages,
  }
}
