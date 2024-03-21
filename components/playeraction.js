//PlayerAction.js
import Link from 'next/link';

const PlayerAction = () => {
    return (

        <div className="container mx-0 mt-20 px-0 py-0">
            <div className="flex flex-wrap justify-center mt-10 mb-10 mx-5">
                <div className="text-lg block max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow ">
                    <h1 className="text-4xl font-bold mb-4 text-center">During your turn </h1>
                    <p className="text-lg" >A game of Resourcity is played in clockwise order. Starting with the first player, the current player does a combination of the following Actions listed below, after which it is the next player’s turn, and so on and so forth.  </p>
                    <p className="text-lg font-bold"> At the start of each player’s turn, move 1 Food and 1 Water token into the ‘Used’ pile.   </p>
                    <div className="flex items-center justify-center mb-10 mt-10">
                        <div className="flex flex-col items-center mx-4">
                            <img src="/Resourcity/images/Tokens/Resource Tokens/Food1.png" alt="Food Token" className="w-1/2 h-auto" />
                            <p className="mt-2 text-center">Food Token</p>
                        </div>
                        <div className="flex flex-col items-center mx-4">
                            <img src="/Resourcity/images/Tokens/Resource Tokens/Water1.png" alt="Water Token" className="w-1/2 h-auto" />
                            <p className="mt-2 text-center">Water Token</p>
                        </div>
                    </div>
                    <p className="text-lg"> You may take up to 4 Actions each turn.  </p>
                    <p className="text-lg"> You may do the same Action several times, each time counting as 1 Action. Your Superpower may change how an Action is done.  </p>
                </div>
            </div>
            <div className="flex flex-wrap justify-center mt-10 mx-5 space-x-6">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                    <img className="rounded-t-lg" src="/Resourcity/images/playermove1.png" alt="" />
                    <div className="p-5">
                        <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Move</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Move to an adjacent tile, following the road.You cannot move to an adjacent tile if its road is disconnected from your current tile. Moving by 1 tile counts as 1 Action. A maximum of 3 players can be on 1 tile together. </p>
                        <p className="font-bold">Cost: None</p>
                    </div>
                </div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                    <img className="rounded-t-lg" src="/Resourcity/images/playermove2.png" alt="" />
                    <div className="p-5">
                        <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Rotate</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Rotate tile you ore standing on, or any adjacent tile by 90 degrees. </p>
                        <p className="font-bold">Cost: 1 Fuel</p>
                    </div>
                </div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                    <img className="rounded-t-lg" src="/Resourcity/images/playermove3.png" alt="" />
                    <div className="p-5">
                        <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Replace</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Choose a tile from your hand to Replace the tile you are standing on, or any adjacent tile (including Community Centre tiles).  </p>
                        <p>You may Rotate the tile while placing it. Roads do not need to make sense (be continuous). </p>
                        <p>Replacing a tile with a road tile costs 3 Fuel tokens. </p>
                        <p>Replacing a tile with a Green Space tile costs only 1 Fuel token. </p>
                        <p>Draw a new tile only at the end of your turn. </p>
                        <p className="font-bold">Cost: 3 fuel (Road tiles)</p>
                        <p className="font-bold">Cost: 1 fuel (Green Space)</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-center mt-10 mx-5 space-x-6 mb-8">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                    <img className="rounded-t-lg" src="/Resourcity/images/placeholder.png" alt="" />
                    <div className="p-5">
                        <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Teleport</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">If standing on a Community Centre, you can Teleport your player token to any other Community Centre.  </p>
                        <p className="font-bold">Cost: None</p>
                    </div>
                </div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                    <img className="rounded-t-lg" src="/Resourcity/images/placeholder.png" alt="" />
                    <div className="p-5">
                        <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Use Superpower </p>
                        <p className="font-bold mb-3">Cost: None</p>
                        <Link href="/superpower" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">See Superpower Cards</Link>

                    </div>
                </div>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                    <img className="rounded-t-lg" src="/Resourcity/images/placeholder.png" alt="" />
                    <div className="p-5">
                        <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Farm</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Plant, Grow, Harvest</p>
                        <Link href="/farmactions" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">See farm actions</Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center mt-10 mb-10 mx-5 mb-8 mt-10 text-left  border-b-2 pb-8">
                <div className="text-lg block max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow ">
                    <h1 className="text-4xl font-bold mb-4 text-center">End of your turn </h1>
                    <h2 className="text-xl font-bold mb-4">At the end of your turn,</h2>
                    <p className="text-lg">If you have 3 tiles left in your hand (ie. did not use any tiles in your hand), you must discard 1 tile into the Discard Pile. Draw 1 new tile immediately.</p>
                    <p className="text-lg">If you have less than 3 tiles left in your hand (ie. used some tiles), simply draw new tiles until you have 3 tiles in your hand.</p>
                    <p className="text-lg">Some actions may have unintended consequences, such as starting a Crisis, or creating a Farm!</p>
                </div>
            </div>
        </div>

    )
}
export default PlayerAction;