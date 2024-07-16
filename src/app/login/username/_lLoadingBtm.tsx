'use client'

import { Button } from '@/components/ui/button'
import { useFormStatus } from 'react-dom'

export const LoadingBtn = () => {
  const { pending } = useFormStatus()
  return (
    <Button disabled={pending} className="mt-5 w-full max-w-xs">
      Continue
    </Button>
  )
}
