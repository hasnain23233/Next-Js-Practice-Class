import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'login page',
    description: "This is a login page of the website"
}

const page = () => {
  return (
    <div>
      <h1>Login page</h1>
    </div>
  )
}

export default page
