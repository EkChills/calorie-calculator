'use client'

import React from 'react'
import { signIn } from 'next-auth/react'

export default function LoginForm() {
  function handleSignIn() {
    signIn('google', {
      callbackUrl: 'http://localhost:3000',
    })
  }
  return (
    <div className="container mx-auto flex min-h-[100dvh] w-full flex-col items-center justify-center text-center">
      <div className="flex flex-col gap-1.5">
        <h2 className="text-2xl font-bold text-primary antialiased md:text-3xl">
          Sign in to your account
        </h2>
        <p className="text-base text-primary">
          <span className="text-base font-light text-black/55">Or</span>{' '}
          register for a new account
        </p>
      </div>
      <button
        onClick={handleSignIn}
        className="border-black/12 mt-8 inline-flex items-center justify-center gap-4 rounded-lg border px-10 py-2 transition-all ease-linear hover:bg-black/5 md:px-20 xl:px-32"
      >
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
          <line x1="21.17" x2="12" y1="8" y2="8" />
          <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
          <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
        </svg>
        <span className="text-base text-primary">Sign in with Google</span>
      </button>
    </div>
  )
}
