import { PRODUCT_STATUSES, type ProductStatus, type Product } from '../types/product'
import './ProductTable.css'

const priceFormatter = new Intl.NumberFormat('ko-KR')

const formatPrice = (price: number) => `${priceFormatter.format(price)}원`

const formatDate = (createdAt: string) => createdAt.replaceAll('-', '.')

const getVisibleRangeLabel = (
  currentPage: number,
  pageSize: number,
  totalCount: number,
) => {
  const start = (currentPage - 1) * pageSize + 1
  const end = Math.min(currentPage * pageSize, totalCount)

  return `${start}-${end} / ${totalCount}건`
}

const getStatusClassName = (status: ProductStatus) => {
  if (status === PRODUCT_STATUSES.SOLD_OUT) {
    return 'product-table__status product-table__status--sold-out'
  }

  if (status === PRODUCT_STATUSES.DISCONTINUED) {
    return 'product-table__status product-table__status--inactive'
  }

  return 'product-table__status product-table__status--active'
}

interface ProductTableProps {
  currentPage: number
  data: Product[]
  pageSize: number
  totalCount: number
  totalPages: number
  onPageChange: (page: number) => void
}

export const ProductTable = ({
  currentPage,
  data,
  pageSize,
  totalCount,
  totalPages,
  onPageChange,
}: ProductTableProps) => {
  const paginationRangeLabel = getVisibleRangeLabel(
    currentPage,
    pageSize,
    totalCount,
  )

  return (
    <section className="product-table">
      <div className="product-table__scroll">
        <table className="product-table__element">
          <thead>
            <tr>
              <th scope="col">상품ID</th>
              <th scope="col">상품명</th>
              <th scope="col">카테고리</th>
              <th scope="col">가격</th>
              <th scope="col">재고수량</th>
              <th scope="col">상태</th>
              <th scope="col">등록일</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{formatPrice(item.price)}</td>
                <td>{item.stock}</td>
                <td>
                  <span className={getStatusClassName(item.status)}>
                    {item.status}
                  </span>
                </td>
                <td>{formatDate(item.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="product-table__pagination">
        <span className="product-table__pagination-summary">
          {paginationRangeLabel}
        </span>

        <div className="product-table__pagination-controls">
          <button
            className="product-table__pagination-button"
            disabled={currentPage === 1}
            type="button"
            onClick={() => onPageChange(currentPage - 1)}
          >
            이전
          </button>

          <div className="product-table__pagination-pages">
            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1
              const isActive = page === currentPage

              return (
                <button
                  key={page}
                  aria-current={isActive ? 'page' : undefined}
                  className={`product-table__pagination-button ${
                    isActive
                      ? 'product-table__pagination-button--active'
                      : ''
                  }`}
                  type="button"
                  onClick={() => onPageChange(page)}
                >
                  {page}
                </button>
              )
            })}
          </div>

          <button
            className="product-table__pagination-button"
            disabled={currentPage === totalPages}
            type="button"
            onClick={() => onPageChange(currentPage + 1)}
          >
            다음
          </button>
        </div>
      </div>
    </section>
  )
}
