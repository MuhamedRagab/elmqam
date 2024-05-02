import { Product } from './types'

export const products: Product[] = [
  {
    id: '1',
    name: 'جلابيات',
    types: [
      {
        id: '1',
        name: 'جلابية بيضاء',
        price: 100
      },
      {
        id: '2',
        name: 'جلابية سوداء',
        price: 120
      }
    ]
  },
  {
    id: '2',
    name: 'عبايات',
    types: [
      {
        id: '1',
        name: 'عباية بيضاء',
        price: 80
      },
      {
        id: '2',
        name: 'عباية سوداء',
        price: 100
      }
    ]
  }
]
