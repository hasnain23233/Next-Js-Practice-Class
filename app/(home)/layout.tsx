import React from 'react'

const layout = ({children} : {children : React.ReactNode}) => {
  return (
      <div>
        <h1>this is a Home of the website</h1>
      {children}
    </div>
  )
}

export default layout
