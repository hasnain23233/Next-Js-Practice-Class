
import { Metadata } from 'next'

type Props = { params: Promise<{ productId: string }> , searchParams: Promise<{ cat : string , type: string } > }

export async function generateMetadata({ params , searchParams }: Props): Promise<Metadata> {
  const { productId } = await params
  const {cat , type} = await searchParams

  return {
    title: `Product ${productId}`,
    description: "Product description of the website"
  }
}


const page = async ({ params , searchParams}: Props) => {
    const productId = (await params).productId
  const {cat , type} = await searchParams
  return (
    <div>
      product Id is {productId} and the search params is {cat} and type is {type}
    </div>
  )
}

export default page
