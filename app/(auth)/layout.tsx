import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "auth",
    description : "this is a authentication side of the website"
}
const layout = ({children} : {children : React.ReactNode}) => {
  return (
      <div>
          this is a authentication side page of the website
      {children}
    </div>
  )
}

export default layout
