import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: {
        default: "wellcome to next",
        template: "%s | next js",
    },
    description: "this page is use for users datails and access them"
}

const page = () => {
  return (
    <div>
      This is a sign up page of the website
    </div>
  )
}

export default page
