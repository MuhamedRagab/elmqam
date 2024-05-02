import Providers from '@renderer/providers'
import { RouterProvider } from 'react-router-dom'
import router from './router'

export default function Root(): JSX.Element {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  )
}
