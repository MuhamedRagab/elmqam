import ProductsList from '../components/Product/ProductsList'

export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen pt-8 text-gray-100">
      {/* <img src={LOGO} alt="لوجو المقام" className="w-64 m-8 rounded-lg shadow-lg" /> */}
      <h1 className="text-center text-5xl font-bold">3متجر المقام</h1>
      <ProductsList />
    </main>
  )
}
