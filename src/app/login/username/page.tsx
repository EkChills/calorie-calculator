import { createUsernameAction } from '@/actions/createUsernameAction'
import { authOptions } from '@/auth'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { getServerSession } from 'next-auth'
import React from 'react'
import { LoadingBtn } from './_lLoadingBtm'
import { redirect } from 'next/navigation'

export default async function UsernamePage() {
  const session = await getServerSession(authOptions)

  return (
    <form
      action={async (formData: FormData) => {
        'use server'

        const res = await createUsernameAction(
          formData.get('username') as string
        )
        if (res?.success) redirect('/dashboard')
      }}
      className="flex min-h-dvh flex-col items-center pt-10"
    >
      <div className="flex flex-col gap-3">
        <h2 className="text-center text-2xl font-bold tracking-tight">
          Enter your Username
        </h2>
        <p className="font-normal tracking-tight text-black/70">
          This is displayed on your dashboard
        </p>
      </div>
      <Input
        defaultValue={session?.user?.email?.split('@')[0]}
        name="username"
        className="mt-4 max-w-xs"
      />
      <LoadingBtn />
    </form>
  )
}
