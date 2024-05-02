import { NextUIProvider } from '@nextui-org/system'
import { PropsWithChildren } from 'react'

export default function Providers({ children }: PropsWithChildren): JSX.Element {
  return (
    <NextUIProvider>
      <main className="text-foreground dark">{children}</main>
    </NextUIProvider>
  )
}
