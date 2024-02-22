// GameBackground.js
import Link from 'next/link';

const GameBackground = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center m-0">
            <div className="flex justify-center items-center">
                <img src="/CapstoneProject/images/Backgroundimage.png" />
            </div>
            <div className="text-left p-8">
                <h1 className="text-4xl font-bold mb-4">The city needs your help! </h1>
                <p className="text-lg">As climate issues and overconsumption worsen around the world, countries have started to keep resources to themselves. </p>
                <p className="text-lg">Imports into the city have ceased, which is a major problem for the city that has historically relied heavily on imports for survival. </p>
                <p className="text-lg">As fellow citizens, take charge and use resources to redesign your city to ensure that it is self-sustaining and able to withstand any incoming crises.  </p>
                <p className="text-lg">To win, your team must survive 4 Crisis situations. </p>
                <p className="text-lg">You lose if your team runs out of any Resource type at any point during the game. </p>
                <br></br>
                <Link href="/rules" className="text-red hover:text-gray-500 cursor-pointer">Learn More..</Link>
            </div>
        </div>
    )

}
export default GameBackground;