type Props = { params: Promise<{ productId:string , clientId: string }> }

import { Metadata } from 'next'
import React from 'react'


export async function generateMetadata({ params }: Props): Promise<Metadata>{
  const { productId, clientId } = await params
  
  return ({
    title: `Product ${productId} / ${clientId}`,
    description: "This is a client description page of the website"
  })
}


const page = async ({ params }: Props) => {
    const {productId , clientId} = (await params)
  return (
    <div>
          this is a with product { productId } client details page of the website {clientId}
    </div>
  )
}

export default page
