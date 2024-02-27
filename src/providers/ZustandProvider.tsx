'use client'
import { ReactNode, useEffect, useState } from 'react'

type ZustandProviderProps = {
  children: ReactNode
}
const ZustandProvider = ({ children }: ZustandProviderProps) => {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  return <>{isHydrated ? <>{children}</> : null}</>
}

export default ZustandProvider
