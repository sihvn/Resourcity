// InsturctionCards.js

const InsturctionCards = () => {
    return (
        <div>
            <h1 className="text-4xl text-center font-bold py-6 bg-pink-100">Instruction Card</h1>
            <div className="flex flex-col lg:flex-row">
                <div className="flex justify-center items-center py-5 px-8">
                    <img src="/Resourcity/images/InstructionCardFront.png" className="w-9/12 h-full " />
                </div>
                <div className="flex justify-center items-center py-5 px-8">
                    <img src="/Resourcity/images/InstructionCardBack.png" className="w-9/12 h-full " />
                </div>
            </div>
        </div>

    )

}
export default InsturctionCards;