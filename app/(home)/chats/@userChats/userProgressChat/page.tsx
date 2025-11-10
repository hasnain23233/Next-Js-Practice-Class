import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
          This is a user chats page progress file <br />
          <Link href={'/chats'} className='text-blue-500 underline'>
            back to main page
          </Link>
    </div>
  )
}

export default page
