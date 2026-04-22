import type { SummaryCard } from '../types/dashboard'

interface ProductSummaryCardsProps {
  cards: SummaryCard[]
}

export const ProductSummaryCards = ({
  cards,
}: ProductSummaryCardsProps) => {
  return (
    <section className="dashboard-page__summary-grid">
      {cards.map((card) => (
        <article
          key={card.label}
          className={`dashboard-page__summary-card dashboard-page__summary-card--${card.tone}`}
        >
          <p className="dashboard-page__summary-label">{card.label}</p>
          <strong className="dashboard-page__summary-value">
            {card.value}개
          </strong>
        </article>
      ))}
    </section>
  )
}
