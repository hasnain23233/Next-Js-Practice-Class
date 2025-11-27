import React from 'react';
import wondersImages, { WonderImage } from '../data';

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const photo: WonderImage = wondersImages.find((p) => p.id === id)!;

    return (
        <div className="container mx-auto my-10">
            <h1 className="text-center text-3xl font-bold my-4">{photo.name}</h1>
            <div className="bg-white py-4">
                <h3>{photo.location}</h3>
                <h3>{photo.photographer}</h3>
            </div>
        </div>
    );
};

export default page;
