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
                <p className="text-lg">Due to global climate issues and overconsumption, countries are keeping resources internally. This cessation of imports poses a significant challenge for a city reliant on them for survival.</p>
                <br></br>
                <p className="text-lg">As citizens, redesign the city to be self-sustaining and resilient to crises. To win, survive <b>four crises</b>, but losing occurs if any resource type runs out.</p>
                <br></br>
                <Link href="/rules" className="text-red hover:text-gray-500 cursor-pointer">Learn More..</Link>
            </div>
        </div>
    )

}
export default GameBackground;