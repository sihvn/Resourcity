//CrisisCards.js
import React, { useState } from 'react';

const CrisisCardsData = [
    { title: 'Blight', image: "/Resourcity/images/Tiles/Crisis/Blight.png" },
    { title: 'Drought', image: "/Resourcity/images/Tiles/Crisis/Drought.png" },
    { title: 'Earthquake', image: "/Resourcity/images/Tiles/Crisis/Earthquake.png" },
    { title: 'Fuel Crisis', image: "/Resourcity/images/Tiles/Crisis/Fuel Crisis.png" },
    { title: 'Manpower Shortage', image: "/Resourcity/images/Tiles/Crisis/Manpower Shortage.png" },
    { title: 'Monsoon Rain', image: "/Resourcity/images/Tiles/Crisis/Monsoon Rain.png" },
    { title: 'Pandemic', image: "/Resourcity/images/Tiles/Crisis/Pandemic.png" },
    { title: 'Pests', image: "/Resourcity/images/Tiles/Crisis/Pests.png" },
    { title: 'Sea Level Rise', image: "/Resourcity/images/Tiles/Crisis/Sea Level Rise.png" },
    { title: 'Trade Embargo', image: "/Resourcity/images/Tiles/Crisis/Trade Embargo.png" },
];

const CrisisCards = () => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const nextCard = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % CrisisCardsData.length);
    };

    const prevCard = () => {
        setCurrentCardIndex((prevIndex) =>
            prevIndex === 0 ? CrisisCardsData.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="container mx-0 mt-5 px-0 py-0">
            <div className="p-4 ">
                <h1 className="text-4xl font-bold mb-4">Crisis Cards </h1>
                <p>If you drew a Crisis tile from the draw deck, follow the instructions written on the tile.  </p>
                <br></br>
                <p>Crisis situations may affect your Resources, Farms, Tiles or Actions.</p>
            </div>
            <div className="max-w-xl mx-auto mt-10">
                <div className="border border-gray-200 rounded-lg shadow p-6">
                    <h1 className="text-4xl font-bold mb-4 text-center">{CrisisCardsData[currentCardIndex].title}</h1>
                    <img src={CrisisCardsData[currentCardIndex].image} alt={CrisisCardsData[currentCardIndex].title} className="w-full rounded-lg mb-4" />
                    {/* <p>{cardsData[currentCardIndex].content}</p> */}
                    <div className="flex justify-between mt-4">
                        <button onClick={prevCard} className="px-4 py-2 bg-blue-500 text-white rounded-md">Previous</button>
                        <button onClick={nextCard} className="px-4 py-2 bg-blue-500 text-white rounded-md">Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CrisisCards;