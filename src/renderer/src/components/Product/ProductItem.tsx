import ProductModal from './ProductModal'
import { Product } from './types'

type ProductItemProps = {
  product: Product
}

export default function ProductItem({ product }: ProductItemProps): JSX.Element {
  return (
    <article key={product.id}>
      <h2 className="text-center text-3xl font-bold">{product.name}</h2>
      <ProductModal product={product} />
    </article>
  )
}
