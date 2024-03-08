//PlayerAction.js
import Link from 'next/link';

const PlayerAction = () => {
    return (

        <div className="container mx-0 mt-20 px-0 py-0">
            <div className="mb-8 text-left ">
                <h1 className="text-4xl font-bold mb-4">During your turn </h1>
                <p className="text-lg">You may take up to 4 Actions each turn. </p>
                <p className="text-lg">Select any combination of the Actions listed below. You may do the same Action several times, each time counting as 1 Action. Your Superpower may change how an Action is done.  </p>
            </div>
            {/* <div className="flex justify-between pb-8"> */}
            <div className="">
                <img src="/Resourcity/images/playermove1.jpg" alt="Image 1" className="w-full h-auto mb-4" />
                <h1 className="text-xl font-bold mb-4">Move</h1>
                <p>Move to an adjacent tile, following the road.</p>
                <p>You cannot move to an adjacent tile if its road is disconnected from your current tile. </p>
                <p>Moving by 1 tile counts as 1 Action. </p>
                <p>A maximum of 3 players can be on 1 tile together.</p>
                <p className="font-bold">Cost: Free!</p>
            </div>

            <div className="">
                <img src="/Resourcity/images/playermove2.jpg" alt="Image 2" className="w-full h-auto mb-4" />
                <h1 className="text-xl font-bold mb-4">Exchange </h1>
                <p>If standing on the same tile as another player, you may exchange a tile from each of your hands. </p>
                <p className="font-bold">Cost: Free!</p>
            </div>
            <div className="">
                <img src="/Resourcity/images/playermove3.jpg" alt="Image 3" className="w-full h-auto mb-4" />
                <h1 className="text-xl font-bold mb-4">Discard </h1>
                <p>Discard any tile from your hand into the Discard Pile. Draw 1 tile immediately. </p>
                <p className="font-bold">Cost: Free!</p>
            </div>
            <div className="">
                <img src="/Resourcity/images/playermove3.jpg" alt="Image 3" className="w-full h-auto mb-4" />
                <h1 className="text-xl font-bold ">Rotate </h1>
                <p>Rotate any adjacent tile by 90 degrees. </p>
                <p className="font-bold">Cost: 1 fuel</p>
            </div>
            {/* </div> */}
            {/* <div className="flex justify-between"> */}
            <div >
                <img src="/Resourcity/images/playermove1.jpg" alt="Image 1" className="w-full h-auto mb-4" />
                <h1 className="text-xl font-bold ">Swap</h1>
                <p>Swap positions with another player. </p>
                <p>To do this, move your player token AND the tile you are standing on.</p>
                <p>Exchange positions with another player’s token AND the tile they are standing on. </p>
                <p className="font-bold">Cost: 2 fuel</p>
            </div>

            <div >
                <img src="/Resourcity/images/playermove2.jpg" alt="Image 2" className="w-full h-auto mb-4" />
                <h1 className="text-xl font-bold mb-4">Use Super-power </h1>
                <Link href="/superpower" className="text-red hover:text-gray-500 cursor-pointer">See Superpower Cards</Link>
                <p className="font-bold">Cost: Free!</p>
            </div>
            <div >
                <img src="/Resourcity/images/playermove3.jpg" alt="Image 3" className="w-full h-auto mb-4" />
                <h1 className="text-xl font-bold mb-4">Farm </h1>
                <p>Build, Plant, Harvest, Fertilize</p>
                <Link href="/farmactions" className="text-red hover:text-gray-500 cursor-pointer">See farm actions</Link>
            </div>
            <div >
                <img src="/Resourcity/images/playermove3.jpg" alt="Image 3" className="w-full h-auto mb-4" />
                <h1 className="text-xl font-bold mb-4">Replace </h1>
                <p> Choose a tile from your hand to Replace the tile you are standing on, or any adjacent tile (including Community Centre tiles).  </p>
                <p>You may Rotate the tile while placing it. Roads do not need to make sense (be continuous). </p>
                <p>Draw a new tile only at the end of your turn. </p>
                <p className="font-bold">Cost: 3 fuel</p>
            </div>
            {/* </div> */}
            <div className="mb-8 text-left  border-b-2 pb-8">
                <h1 className="text-xl font-bold mb-4">At the end of your turn, move 1 Food and 1 Water token to the Used Pile. </h1>
                <p className="text-lg">If you have 3 tiles left in your hand (ie. did not use any tiles in your hand), you must discard 1 tile into the Discard Pile. Draw 1 new tile immediately.</p>
                <br></br>
                <p className="text-lg">If you have less than 3 tiles left in your hand (ie. used some tiles), simply draw new tiles until you have 3 tiles in your hand.</p>
                <br></br>
                <p className="text-lg">Some actions may have unintended consequences, such as starting a Crisis, or creating a Farm!</p>
            </div>
        </div>

    )
}
export default PlayerAction;