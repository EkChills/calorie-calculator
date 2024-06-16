import { serial, text, pgTableCreator } from 'drizzle-orm/pg-core'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema1 from './schema'

const connectionString = process.env.DATABASE_URL as string
const client = postgres(connectionString)
export const db = drizzle(client, { schema: { ...schema1 } })
