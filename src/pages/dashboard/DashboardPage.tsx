import { ProductTable } from '../../features/product-table/components/ProductTable'
import { products } from '../../features/product-table/data/products'
import './DashboardPage.css'

export const DashboardPage = () => {
  const productCount = products.length

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

      <ProductTable data={products} />
    </main>
  )
}
