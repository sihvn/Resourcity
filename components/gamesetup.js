//GameSetup.js

const GameSetup = () => {
    return (
        <div className="">
            <div className="mb-2 text-center ">

                <h1 className="text-4xl font-bold mb-2 py-4 bg-teal-100 mt-32">Set Up </h1>
                <p className="text-lg">To begin, you will need to set up the game. </p>
            </div>
            <div className="flex items-center justify-center mb-10 mt-10 ">
                <div className="flex flex-col items-center mx-4">
                    <img src="/Resourcity/images/beginnerlayout.png" alt="Beginner Layout" className="w-2/3 h-auto" />
                    <p className="mt-2 text-center">Beginner Layout</p>
                </div>
                <div className="flex flex-col items-center mx-4">
                    <img src="/Resourcity/images/advancedlayout.png" alt="Advanced Layout" className="w-2/3 h-auto" />
                    <p className="mt-2 text-center">Advanced Layout</p>
                </div>
            </div>

            <div className="flex flex-wrap justify-center mt-10 mx-5">
                <div className="flex flex-col items-center text-lg block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
                    <p className="font-bold">Step 1</p>
                    <p>Choose 1 layout from the 2 above. Lay out the tiles accordingly.</p>
                </div>
                <div className="flex flex-col items-center text-lg block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
                    <p className="font-bold">Step 2</p>
                    <p>Shuffle remaining tiles (includes road, Green Space and Huat tiles). Deal 3 tiles to each player, face up.</p>
                </div>
                <div className="flex flex-col items-center text-lg block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
                    <p className="font-bold">Step 3</p>
                    <p>Randomly place remaining tiles face down to complete the 6x6 grid. Then, flip them over. Replace any Huat tiles on the grid with a road tile. </p>
                    <br></br>
                    <p>Note: This is to ensure that the arrangement of tiles is truly random.</p>
                </div>
            </div>
            <div className="flex flex-wrap justify-center mt-10 mx-5">
                <div className="text-lg block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
                    <p className="font-bold">Step 4</p>
                    <p>Stack remaining tiles to form the draw deck.</p>
                </div>
                <div className="text-lg block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
                    <p className="font-bold">Step 5</p>
                    <p>Shuffle the Crisis tiles. Keeping them face down, choose 4 randomly.</p>
                </div>
                <div className="text-lg block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
                    <p className="font-bold">Step 6</p>
                    <p>Divide the draw deck into 3 roughly equal stacks. Slot 1 Crisis tile into each stack and shuffle them. Place the 3 stacks on top of the 4th Crisis tile to form the draw deck.</p>
                    <br></br>
                    <p>Note: This is to ensure that Crisis tile do not come into the game too early, too late, or too soon after one another.</p>
                </div>
            </div>
            <div className="flex justify-center">
                <img src="/Resourcity/images/TilesDiagram.png" alt="Shuffle Tiles" className="w-auto h-auto px-4 lg:w-1/2" />
            </div>
            <div className="flex flex-wrap justify-center mt-10 mx-5">
                <div className="text-lg block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
                    <p className="font-bold">Step 7</p>
                    <p>Shuffle Superpower cards face down and deal 1 to each player. Take the player token that matches the colour of your Superpower card.</p>
                </div>
                <div className="text-lg block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
                    <p className="font-bold">Step 8</p>
                    <p>Place each player token on a Community Centre. Each Community Centre must have at least 1, and at most 3, player tokens on it.</p>
                </div>
                <div className="text-lg block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
                    <p className="font-bold">Step 9</p>
                    <p>Hand out an Instruction Card to each player.</p>
                </div>
            </div>
            <div className="text-center font-bold border-b-2 pb-16 mt-10 px-4">
                <p className="text-2xl">Strategize as a team and decides who starts first.  </p>
            </div>
        </div>
    )
}
export default GameSetup;