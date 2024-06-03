//Superpowers.js
import React, { useState } from 'react';

const cardsData = [
    { title: 'Builder', content: 'Replace or Rotate diagonal road tiles, in addition to adjacent ones. Replacing road tiles costs 2 Fuel instead of 3. This applies every turn.', image: "/Resourcity/images/builder.png" },
    { title: 'Cyclist', content: 'When taking a “Move” Action, Move up to 2 tiles instead of 1, every turn.', image: "/Resourcity/images/cyclist.png" },
    { title: 'Farmer', content: 'You may Grow and Harvest from the same Plot during the same turn. (Growing and Harvesting still count as 1 Action each.) During a Crisis, Harvest 1 corresponding Resource token per adjacent destroyed Plot.', image: "/Resourcity/images/farmer.png" },
    { title: 'Innovator', content: 'Complete 5 Actions instead of 4, every turn.', image: "/Resourcity/images/innovator.png" },
    { title: 'Planner', content: 'Swap tile you are standing on with the tile that another player is standing on. Using this Superpower counts as 1 Action.', image: "/Resourcity/images/planner.png" },
    { title: 'Policy Maker', content: 'Move any player token from and to anywhere on the board. Using this Superpower counts as 2 Actions.', image: "/Resourcity/images/policymaker.png" },
];


const Superpowers = () => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const nextCard = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
    };

    const prevCard = () => {
        setCurrentCardIndex((prevIndex) =>
            prevIndex === 0 ? cardsData.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="pt-16">
            <div className="mb-2 text-center ">
                <h1 className="text-4xl font-bold mb-4 py-6 bg-orange-100">Superpowers</h1>
                <br></br>
                <p className="text-xl mb-4 px-6">You may use your Superpower during your turn only. </p>
            </div>
            <div className="max-w-xl mx-auto px-16 mt-10">
                <div className="border border-gray-200 rounded-lg shadow p-6">
                    {/* <h1 className="text-4xl font-bold mb-4 text-center">{cardsData[currentCardIndex].title}</h1> */}
                    <div className="flex justify-center">
                        <div className="flex justify-between mt-4">
                            <button onClick={prevCard} className="px-4 py-2 bg-white text-black font-bold text-5xl rounded-md">{'<'}</button>
                        </div>
                        <img src={cardsData[currentCardIndex].image} alt={cardsData[currentCardIndex].title} className="w-full rounded-lg mb-4" />
                        <div className="flex justify-between mt-4">
                            <button onClick={nextCard} className="px-4 py-2 bg-white text-black font-bold  text-5xl rounded-md">{'>'}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Superpowers;