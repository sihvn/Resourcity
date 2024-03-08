//GameSetup.js

const GameSetup = () => {
    return (
        <div className="container mx-0 mt-5 px-0 py-0">
            <div className="mb-2 text-left ">
                <h1 className="text-4xl font-bold mb-2">Set Up </h1>
                <p className="text-lg">To begin, you will need to set up the game. </p>
            </div>
            <div className="flex justify-center mb-30">
                <div className="flex flex-wrap">
                    <div className="">
                        <img src="//images/layout1.jpg" alt="Image 1" className="w-auto h-auto" />
                    </div>
                    <div className="">
                        <img src="/Resourcity/images/layout2.jpg" alt="Image 2" className="w-auto h-auto" />
                    </div>
                    <div className="">
                        <img src="/Resourcity/images/layout3.jpg" alt="Image 3" className="w-auto h-auto" />
                    </div>
                </div>
            </div>
            <div className="text-justify border-b-2 pb-8">
                <p className="text-lg">1. Choose 1 layout from the 3 above. Lay out the tiles accordingly.</p>
                <p className="text-lg">2. Shuffle remaining road tiles face down. Deal 3 tiles to each player, face up.</p>
                <p className="text-lg">3. Randomly place remaining road tiles down to complete a 6x6 grid. Any remaining tiles form the draw deck. </p>
                <p className="text-lg">4. Choose 4 Crisis cards randomly, keeping them face down.</p>
                <p className="text-lg">5. Deal the Crisis cards into the draw deck by approximately dividing the draw deck into 4 stacks. Place 1 Crisis card on the bottom of each stack. Shuffle only 3 stacks and place them on top of the 4th stack to form the draw deck.</p>
                <p className="text-lg">6. Shuffle Superpower cards face down and deal 1 to each player.</p>
                <p className="text-lg">7. Place each player token on a Community Centre. Each Community Centre must have at least 1 player token on it.</p>
                <p className="text-lg">Strategize as a team and decide who starts first.</p>
            </div>
        </div>
    )
}
export default GameSetup;