import * as React from 'react'

import { cn } from '@/lib/utils'
// AUTH_DRIZZLE_URL='postgres://postgres.lwktgvrweqncnlidinvy:Ekene13881609@aws-0-eu-west-2.pooler.supabase.com:6543/postgres'
// # DATABASE_URL='postgres://postgres.lwktgvrweqncnlidinvy:Ekene13881609@aws-0-eu-west-2.pooler.supabase.com:5432/postgres'
// DATABASE_URL=postgresql://damned:damned123@localhost:6543/postgres
// GOOGLE_ID=1044463983230-tbm6cbrk7dcmu7bk81ka56l72r1agtrk.apps.googleusercontent.com
// GOOGLE_SECRET=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
// NEXTAUTH_SECRET="briueriugiergiergoijeriog"
// NEXTAUTH_URL="http://localhost:3000"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }
