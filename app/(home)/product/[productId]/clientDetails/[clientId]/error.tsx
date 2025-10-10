'use client'
import React from 'react'

const ReviewError = ({error}: {error: Error}) => {
  return (
    <div>
          Sorry Error occure <br />
          {error.message}
    </div>
  )
}

export default ReviewError
