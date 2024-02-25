// GameBackground.js
import Link from 'next/link';

const GameBackground = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center m-0">
            <div className="flex justify-center items-center">
                <img src="/CapstoneProject/images/Backgroundimage.png" />
            </div>
            <div className="text-left p-4">
                <h1 className="text-4xl font-bold mb-4">The city needs your help! </h1>
                <p className="text-lg">Due to global climate issues and overconsumption, countries are keeping resources internally. This cessation of imports poses a significant challenge for a city reliant on them for survival.</p>
                <br></br>
                <h1 className="text-4xl font-bold mb-4">How to play </h1>
                <p className="text-lg">As fellow citizens, your team decides to take action to help your city become self-sustaining. </p>
                <br></br>
                <p className="text-lg">Work together to transform the board by Rotating and Replacing tiles. Connect roads and form Farms, then Plant Crops in exchange for Resources to replenish the Resource Pool! </p>
                <br></br>
                <p className="text-lg">But be careful - every Action you take consumes Resources, and a Crisis might strike at any time! Can your team create a truly resilient city without letting the Resource Pool run out?</p>
                <br></br>
                <h1 className="text-4xl font-bold mb-4">How to win </h1>
                <p className="text-lg">To win, your team must survive 4 Crisis situations. </p>
                <p className="text-lg">You lose if your team runs out of any Resource type at any point during the game. </p>
                <br></br>
                <Link href="/rules" className="text-red hover:text-gray-500 cursor-pointer">Learn More..</Link>
            </div>
        </div>
    )

}
export default GameBackground;