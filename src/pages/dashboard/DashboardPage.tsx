import { useState } from 'react'
import { ProductPagination } from '../../features/product-table/components/ProductPagination'
import { ProductTable } from '../../features/product-table/components/ProductTable'
import { products } from '../../features/product-table/data/products'
import { ProductSummaryCards } from './components/ProductSummaryCards'
import {
  DASHBOARD_PAGE_SIZE,
  createDashboardViewModel,
} from './utils/dashboard'
import './DashboardPage.css'

export const DashboardPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { productCount, summaryCards, paginatedProducts, totalPages } =
    createDashboardViewModel(products, currentPage)

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
        pageSize={DASHBOARD_PAGE_SIZE}
        totalCount={productCount}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </main>
  )
}
