'use server'

import { db } from '@/app/db'
import { user } from '@/app/db/schema'
import { authOptions, getServerAuthSession } from '@/auth'
import { eq } from 'drizzle-orm'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { z, ZodError } from 'zod'

export const createUsernameAction = async (name: string) => {
  try {
    const currentUser = await getServerAuthSession()
    const schema = z.string().parse(name)
    if (!schema) {
      return {
        success: false,
        message: 'input cannot be empty',
      }
    }
    await db
      .update(user)
      .set({ username: schema })
      .where(eq(user.email, currentUser?.user?.email as string))
    return {
      success: true,
      message: 'user has been updated',
    }
  } catch (error) {
    if (error instanceof ZodError) {
      return {
        success: false,
        message: error.message,
      }
    }
  }
}
