import wondersImages, { WonderImage } from '../../data'
import Modal from '../../component/Model'

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;
    const photo: WonderImage = wondersImages.find(
        (p) => p.id === id
    )!;

    return (
        <Modal>
            <div className="bg-white p-4">
                <h2 className="text-xl font-semibold">{photo.name}</h2>
                <h3>{photo.photographer}</h3>
                <h3>{photo.location}</h3>
            </div>
        </Modal>
    );
}
