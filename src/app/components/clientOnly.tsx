'use client'

import { useEffect, useState } from 'react'

export function ClientOnly({ 
  children 
}: { 
  children: React.ReactNode 
}): JSX.Element | null {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return <>{children}</>
}

export default ClientOnly