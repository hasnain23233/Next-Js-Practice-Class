import React from 'react'
import NotFound from '@/app/not-found'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: {
        default: "wellcome to next",
        template: "%s | next js",
    },
    description: "this page is use for users datails and access them"
}

const page = async ({ params }: { params: Promise<{ User: string[] }> }) => {
    const {User} = await params
    console.log(User)

    if (User?.length === 1) {
        return <>
            <div>
                This is a fist user client
            </div>
        </>
    }
    if (User?.length === 2) {
        return <>
            <div>
                This is a seacond user client
            </div>
        </>
    }
    if (User?.length > 2) {
        return <>
            <NotFound/>
        </>
    }
  return (
    <div>
      This is a user page of the website Access All from here 
    </div>
  )
}

export default page
