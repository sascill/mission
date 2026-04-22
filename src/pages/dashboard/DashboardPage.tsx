import { useState } from 'react'
import { ProductPagination } from '../../features/product-table/components/ProductPagination'
import { ProductTable } from '../../features/product-table/components/ProductTable'
import { products } from '../../features/product-table/data/products'
import { PRODUCT_STATUSES } from '../../features/product-table/types/product'
import {
  ProductSummaryCards,
  type SummaryCard,
} from './components/ProductSummaryCards'
import './DashboardPage.css'

const PAGE_SIZE = 10

export const DashboardPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const productCount = products.length
  const onSaleCount = products.filter(
    (product) => product.status === PRODUCT_STATUSES.ON_SALE,
  ).length
  const soldOutCount = products.filter(
    (product) => product.status === PRODUCT_STATUSES.SOLD_OUT,
  ).length
  const discontinuedCount = products.filter(
    (product) => product.status === PRODUCT_STATUSES.DISCONTINUED,
  ).length
  const totalPages = Math.ceil(productCount / PAGE_SIZE)
  const startIndex = (currentPage - 1) * PAGE_SIZE
  const paginatedProducts = products.slice(startIndex, startIndex + PAGE_SIZE)
  const summaryCards: SummaryCard[] = [
    {
      label: '전체 상품',
      tone: 'total',
      value: productCount,
    },
    {
      label: PRODUCT_STATUSES.ON_SALE,
      tone: 'on-sale',
      value: onSaleCount,
    },
    {
      label: PRODUCT_STATUSES.SOLD_OUT,
      tone: 'sold-out',
      value: soldOutCount,
    },
    {
      label: PRODUCT_STATUSES.DISCONTINUED,
      tone: 'discontinued',
      value: discontinuedCount,
    },
  ]

  return (
    <main className="dashboard-page">
      <section className="dashboard-page__hero">
        <p className="dashboard-page__eyebrow">Mission Dashboard</p>
        <div className="dashboard-page__heading">
          <h1 className="dashboard-page__title">상품 관리 대시보드</h1>
          <span className="dashboard-page__count">
            총 {productCount}개 상품
          </span>
        </div>
      </section>

      <ProductSummaryCards cards={summaryCards} />

      <ProductTable data={paginatedProducts} />
      <ProductPagination
        currentPage={currentPage}
        pageSize={PAGE_SIZE}
        totalCount={productCount}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </main>
  )
}
