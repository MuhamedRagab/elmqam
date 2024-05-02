export type Product = {
  id: string
  name: string
  types: {
    id: string
    name: string
    price: number
  }[]
}
