'use client'
import { ReactNode, useEffect, useState } from 'react'

type ZustandProviderProps = {
  children: ReactNode
}
const ZustandProvider = ({ children }: ZustandProviderProps) => {
  const [isHydrated, setIsHydrated] = useState(false)

  console.log(isHydrated)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  return <>{isHydrated ? <>{children}</> : 'aaaaaaa'}</>
}

export default ZustandProvider
