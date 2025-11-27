import { StaticImageData } from "next/image";

export type WonderImage = {
    id: string;
    name: string;
    photographer: string;
    location: string;
};

const wondersImages: WonderImage[] = [
    {
        id: "1",
        name: "Great Wall of China",
        photographer: "Photo by SylviaWetzel",
        location: "China",
    },
    {
        id: "2",
        name: "Petra",
        photographer: "Photo by ChiemSeherin",
        location: "Jordan",
    },
    {
        id: "3",
        name: "Christ the Redeemer",
        photographer: "Photo by Graham-H",
        location: "Brazil",
    },
    {
        id: "4",
        name: "Machu Picchu",
        photographer: "Photo by WikiImages",
        location: "Peru",
    },
    {
        id: "5",
        name: "Chichen Itza",
        photographer: "Photo by Walkerssk",
        location: "Mexico",
    },
    {
        id: "6",
        name: "Roman Colosseum",
        photographer: "Photo by Serena Morandi",
        location: "Italy",
    },
    {
        id: "7",
        name: "Taj Mahal",
        photographer: "Photo by RuthiesArtCreations",
        location: "India",
    },
];

export default wondersImages;