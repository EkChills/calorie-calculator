import { relations } from 'drizzle-orm'
import {
  serial,
  text,
  pgTableCreator,
  boolean,
  timestamp,
  primaryKey,
  integer,
  uuid,
  pgEnum,
  varchar,
} from 'drizzle-orm/pg-core'
import type { AdapterAccount } from '@auth/core/adapters'

export const documentStatusEnum = pgEnum('document_status', [
  'DELETED',
  'ACTIVE',
  'PENDING',
])

export const pgTable = pgTableCreator((name) => `calorie_calc_${name}`)

// export const user = pgTable('user', {
//   id:text('id').defaultRandom().primaryKey(),
//   email:varchar('email', {length:255}),
//   firstName:varchar('firstName', {length:255}),
//   lastName:varchar('lastName', {length:255}),
//   active:boolean('active'),
//   password:text('password'),
//   createdAt:timestamp('createdAt').defaultNow()
// })

export const user = pgTable('user', {
  id: text('id').notNull().primaryKey(),
  username: varchar('username', { length: 100 }),
  email: text('email').notNull(),
  emailVerified: timestamp('emailVerified', { mode: 'date' }),
  name: text('name'),
  firstName: text('firstName'),
  lastName: text('lastName'),
  image: text('image'),
  active: boolean('active'),
  password: text('password'),
  createdAt: timestamp('createdAt').defaultNow(),
})

export const accounts = pgTable(
  'account',
  {
    userId: text('userId')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade' }),
    type: text('type').$type<AdapterAccount['type']>().notNull(),
    provider: text('provider').notNull(),
    providerAccountId: text('providerAccountId').notNull(),
    refresh_token: text('refresh_token'),
    access_token: text('access_token'),
    expires_at: integer('expires_at'),
    token_type: text('token_type'),
    scope: text('scope'),
    id_token: text('id_token'),
    session_state: text('session_state'),
  },
  (account) => ({
    compoundKey: primaryKey(account.provider, account.providerAccountId),
  })
)

export const sessions = pgTable('session', {
  sessionToken: text('sessionToken').notNull().primaryKey(),
  userId: text('userId')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
  expires: timestamp('expires', { mode: 'date' }).notNull(),
})

export const verificationTokens = pgTable(
  'verificationToken',
  {
    identifier: text('identifier').notNull(),
    token: text('token').notNull(),
    expires: timestamp('expires', { mode: 'date' }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey(vt.identifier, vt.token),
  })
)
