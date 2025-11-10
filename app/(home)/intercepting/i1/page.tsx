import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
          <h1>i1 page</h1> <br />
          <Link href={'./i2'}>i2</Link>
    </div>
  )
}

export default page
