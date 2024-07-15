import React from 'react'
import MaxwidthWrapper from './MaxwidthWrapper'
import Link from 'next/link'
import { getServerAuthSession } from '@/auth'
import Image from 'next/image'
import { LogOut } from 'lucide-react'
import { db } from '@/app/db'
import { user } from '@/app/db/schema'
import { eq } from 'drizzle-orm'

export default async function Navbar() {
  const session = await getServerAuthSession()
  const username = (
    await db
      .select()
      .from(user)
      .where(eq(user.email, session?.user?.email as string))
  ).at(0)?.username
  return (
    <div className="flex h-14 flex-col justify-center border-b py-1">
      <MaxwidthWrapper>
        <div className="flex items-center justify-between">
          <Link href={'/dashboard'} className="flex gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-700">
              <div className="h-[14px] w-[14px] rounded-full bg-white" />
            </div>
            <span className="text-lg font-bold">Wind</span>
          </Link>
          <div className="flex items-center gap-2">
            <Image
              src={session?.user?.image || ''}
              className="cursor-pointer rounded-full"
              alt="avatar"
              width={40}
              height={40}
            ></Image>
            <div className="flex cursor-pointer items-center gap-2">
              <span className="font-semibold">{username}</span>
              <span>|</span>
              <span>Logout</span>
              <LogOut className="h-6 w-6" />
            </div>
          </div>
        </div>
      </MaxwidthWrapper>
    </div>
  )
}
