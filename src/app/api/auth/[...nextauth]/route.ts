import { db } from '@/app/db'
import { pgTable } from '@/app/db/schema'
import { DrizzleAdapter } from '@auth/drizzle-adapter'
import NextAuth, { AuthOptions } from 'next-auth'
import { Adapter } from 'next-auth/adapters'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: AuthOptions = {
    adapter: DrizzleAdapter(db) as Adapter,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),
    ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
