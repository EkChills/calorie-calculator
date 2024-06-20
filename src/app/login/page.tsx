import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LoginForm from './_loginForm'
import { db } from '../db/'

export const metadata: Metadata = {
  title: 'Login or Sign up to your account',
}

export default async function page() {
  const users = await db.query.users.findMany()
  console.log(users, 'users')

  return <LoginForm />
}
