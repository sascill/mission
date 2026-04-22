export interface SummaryCard {
  label: string
  tone: 'total' | 'on-sale' | 'sold-out' | 'discontinued'
  value: number
}
