// InsturctionCards.js
import Link from 'next/link';

const InstructionCards = () => {
    return (
        <div className='pt-16'>
            <h1 className="text-4xl text-center font-bold py-6 bg-pink-100">Instruction Card</h1>
            <div className="flex flex-col lg:flex-row">
                <div className="flex justify-center items-center py-5 px-8">
                    <img src="/Resourcity/images/InstructionCardFront.png" className="w-9/12 h-full " />
                </div>
                <div className="flex justify-center items-center py-5 px-8">
                    <img src="/Resourcity/images/InstructionCardBack.png" className="w-9/12 h-full " />
                </div>
            </div>
            <div className="text-center font-bold border-b-2 pb-16 mt-10 px-4">
                <Link href="/tutorial" className="text-2xl hover:text-gray-500 cursor-pointer">Watch our instructional video before starting the game.</Link>
            </div>
        </div>

    )

}
export default InstructionCards;