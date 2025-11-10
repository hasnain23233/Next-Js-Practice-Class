import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
          This is intercepting page of the i2 folder (..) <br />
            ��� Go to i3 page
          <br />
          <Link href={'/i3'}>i3</Link>
    </div>
  )
}

export default page
