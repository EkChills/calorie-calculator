import { AuthOptions, getServerSession } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { DrizzleAdapter } from '@auth/drizzle-adapter'
import { db, pgTable } from '@/app/db'
import * as schema from '../app/db/schema'
import { Adapter } from 'next-auth/adapters'

export const authOptions: AuthOptions = {
  adapter: DrizzleAdapter(db, pgTable) as any,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
}

export const getServerAuthSession = async () => {
  return await getServerSession(authOptions)
}
