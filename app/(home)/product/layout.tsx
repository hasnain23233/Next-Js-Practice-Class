import React from 'react'

const layout = ({ children } : {children: React.ReactNode}) => {
  return (
      <div>
          this is a nested layout for product page of the website
      {children}
    </div>
  )
}

export default layout
