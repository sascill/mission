import './ProductPagination.css'

const getVisibleRangeLabel = (
  currentPage: number,
  pageSize: number,
  totalCount: number,
) => {
  if (totalCount === 0) {
    return '0-0 / 0건'
  }

  const start = (currentPage - 1) * pageSize + 1
  const end = Math.min(currentPage * pageSize, totalCount)

  return `${start}-${end} / ${totalCount}건`
}

interface ProductPaginationProps {
  currentPage: number
  pageSize: number
  totalCount: number
  totalPages: number
  onPageChange: (page: number) => void
}

export const ProductPagination = ({
  currentPage,
  pageSize,
  totalCount,
  totalPages,
  onPageChange,
}: ProductPaginationProps) => {
  const paginationRangeLabel = getVisibleRangeLabel(
    currentPage,
    pageSize,
    totalCount,
  )

  return (
    <div className="product-pagination">
      <span className="product-pagination__summary">
        {paginationRangeLabel}
      </span>

      <div className="product-pagination__controls">
        <button
          className="product-pagination__button"
          disabled={currentPage === 1}
          type="button"
          onClick={() => onPageChange(currentPage - 1)}
        >
          이전
        </button>

        <div className="product-pagination__pages">
          {Array.from({ length: totalPages }, (_, index) => {
            const page = index + 1
            const isActive = page === currentPage

            return (
              <button
                key={page}
                aria-current={isActive ? 'page' : undefined}
                className={`product-pagination__button ${
                  isActive ? 'product-pagination__button--active' : ''
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
          className="product-pagination__button"
          disabled={currentPage === totalPages}
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
        >
          다음
        </button>
      </div>
    </div>
  )
}
