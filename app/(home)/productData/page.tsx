import React from 'react'
import wondersImages, { WonderImage } from './data'
import Link from 'next/link'

const page = () => {
    return (
        <>
            <h1 className="text-center text-3xl font-bold my-4">
                7 Wonders of the World
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {wondersImages.map(({ id, name, photographer, location }) => (
                    <Link href={`/productData/${id}`} key={id}>
                        <h2>{name}</h2>
                        <p>{photographer}</p>
                        <p>{location}</p>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default page
