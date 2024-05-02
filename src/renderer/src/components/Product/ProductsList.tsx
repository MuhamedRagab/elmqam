import { products } from './data'
import ProductItem from './ProductItem'

export default function ProductsList(): JSX.Element {
  return (
    <section className="mt-16 grid grid-cols-1 gap-4 p-4">
      <ul className="mx-auto flex items-center gap-8">
        {products.map((product) => (
          <li key={product.id}>
            <ProductItem product={product} />
          </li>
        ))}
      </ul>
    </section>
  )
}
