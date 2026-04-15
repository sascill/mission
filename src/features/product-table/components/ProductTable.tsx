import type { ProductStatus, Product } from '../types/product'
import './ProductTable.css'

const priceFormatter = new Intl.NumberFormat('ko-KR')

const formatPrice = (price: number) => `${priceFormatter.format(price)}원`

const formatDate = (createdAt: string) => createdAt.replaceAll('-', '.')

const getStatusClassName = (status: ProductStatus) => {
  if (status === '품절') {
    return 'product-table__status product-table__status--sold-out'
  }

  if (status === '판매중지') {
    return 'product-table__status product-table__status--inactive'
  }

  return 'product-table__status product-table__status--active'
}

interface ProductTableProps {
  data: Product[]
}

export const ProductTable = ({ data }: ProductTableProps) => {
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
    </section>
  )
}
