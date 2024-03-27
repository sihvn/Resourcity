//HuatCards.js
import React, { useState } from 'react';

const HuatCardsData = [
    { title: 'Bumper Harvest', image: "/Resourcity/images/Tiles/Huat/Bumper Harvest.png" },
    { title: 'Community Day', image: "/Resourcity/images/Tiles/Huat/Community Day.png" },
    { title: 'Compost Day', image: "/Resourcity/images/Tiles/Huat/Compost Day.png" },
    { title: 'Good Rainfall', image: "/Resourcity/images/Tiles/Huat/Good Rainfall.png" },

];

const HuatCards = () => {
    const [currentCardIndex1, setCurrentCardIndex1] = useState(1);

    const nextCard1 = () => {
        setCurrentCardIndex1((prevIndex1) => (prevIndex1 + 1) % HuatCardsData.length);
    };

    const prevCard1 = () => {
        setCurrentCardIndex1((prevIndex1) =>
            prevIndex1 === 0 ? HuatCardsData.length - 1 : prevIndex1 - 1
        );
    };
    return (
        <div className="container mx-0 mt-24 px-0 py-0 mb-24">
            <div className="mb-2 text-center ">
                <h1 className="text-4xl font-bold mb-4">Huat Cards </h1>
                <p className="text-xl mb-4">If you drew a Huat (發) tile from the draw deck, follow the instructions written on the tile.   </p>
                <br></br>
                <p className="text-xl mb-4">They include community and chance situations that positively affect your Resources, Farms or Actions.</p>
                <br></br>
            </div>
            <div className="max-w-xl mx-auto mt-10">
                <div className="border border-gray-200 rounded-lg shadow p-6">
                    <h1 className="text-4xl font-bold mb-4 text-center">{HuatCardsData[currentCardIndex1].title}</h1>
                    <div className="flex justify-center">
                        <div className="flex justify-between mt-4">
                            <button onClick={prevCard1} className="px-4 py-2 bg-white text-black font-bold text-5xl rounded-md">{'<'}</button>
                        </div>
                        <img src={HuatCardsData[currentCardIndex1].image} alt={HuatCardsData[currentCardIndex1].title} className="w-full rounded-lg mb-4" />
                        <div className="flex justify-between mt-4">
                            <button onClick={nextCard1} className="px-4 py-2 bg-white text-black font-bold  text-5xl rounded-md">{'>'}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HuatCards;