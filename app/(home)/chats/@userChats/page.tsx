import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      This is a user chats page file <br />
      <Link href={'/chats/userProgressChat'} className='text-blue-500 underline'>
        Product User Progress Chat Page
      </Link>
    </div>
  )
}

export default page
  