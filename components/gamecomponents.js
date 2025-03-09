//GameComponent.js

const GameComponent = () => {
    return (
        <div className="p-4 pt-16">
            <h1 className="text-4xl font-bold text-center mb-4 py-6 bg-blue-100">Game Component</h1>
            <h2 className="text-4xl font-bold text-center py-8">Tiles</h2>
            <div className="flex flex-wrap justify-center  mx-5">
                <div className="flex flex-wrap justify-center">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-2">
                        <img src="/Resourcity/images/Tiles/Roads/Straight Road.png" alt="road" className="w-full h-64 object-contain" />
                        <div className="font-bold text-xl mb-2 text-center">Road x15</div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-2">
                        <img src="/Resourcity/images/Tiles/Roads/Curve Road.png" alt="road" className="w-full h-64 object-contain" />
                        <div className="font-bold text-xl mb-2 text-center">Road x20</div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-2">
                        <img src="/Resourcity/images/Tiles/Roads/Tennis Ball Road.png" alt="road" className="w-full h-64 object-contain" />
                        <div className="font-bold text-xl mb-2 text-center">Road x10</div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-2">
                        <img src="/Resourcity/images/Tiles/Roads/3-Way Road.png" alt="road" className="w-full h-64 object-contain" />
                        <div className="font-bold text-xl mb-2 text-center">Road x14</div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-2">
                        <img src="/Resourcity/images/Tiles/Roads/4-Way Road.png" alt="road" className="w-full h-64 object-contain" />
                        <div className="font-bold text-xl mb-2 text-center">Road x6</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center  mx-5  mb-16">
                <div className="flex flex-wrap justify-center">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-2">
                        <img src="/Resourcity/images/Tiles/Roads/Green Space.png" alt="road" className="w-full h-64 object-contain" />
                        <div className="font-bold text-xl mb-2 text-center">Green Space x8</div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-2">
                        <img src="/Resourcity/images/Tiles/Roads/Community Centre.png" alt="road" className="w-full h-64 object-contain" />
                        <div className="font-bold text-xl mb-2 text-center">Community Centre x3</div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-2">
                        <img src="/Resourcity/images/Tiles/Crisis/Crsis.png" alt="road" className="w-full h-64 object-contain" />
                        <div className="font-bold text-xl mb-2 text-center">Crisis x10</div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-2">
                        <img src="/Resourcity/images/Tiles/Huat/Huat.png" alt="road" className="w-full h-64 object-contain" />
                        <div className="font-bold text-xl mb-2 text-center">Huat x4</div>
                    </div>
                </div>
            </div>

            <h2 className="text-4xl font-bold text-center py-8">Resource Tokens</h2>
            <div className="flex flex-wrap justify-center mx-5 mb-16">
                <div className="flex flex-wrap justify-center">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-2">
                        <img src="/Resourcity/images/Tokens/Resource Tokens/FuelAll.png" alt="road" className="w-full h-64 object-contain" />
                        <div className="font-bold text-xl mb-2 text-center">Fuel</div>
                        <div className="font-bold text-xl mb-2 text-center">x4       x4</div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-2">
                        <img src="/Resourcity/images/Tokens/Resource Tokens/FoodAll.png" alt="road" className="w-full h-64 object-contain" />
                        <div className="font-bold text-xl mb-2 text-center">Food</div>
                        <div className="font-bold text-xl mb-2 text-center">x4       x4</div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-2">
                        <img src="/Resourcity/images/Tokens/Resource Tokens/WaterAll.png" alt="road" className="w-full h-64 object-contain" />
                        <div className="font-bold text-xl mb-2 text-center">Water</div>
                        <div className="font-bold text-xl mb-2 text-center">x4       x4</div>
                    </div>
                </div>
            </div>
            <h2 className="text-4xl font-bold text-center py-8">Farm Tokens</h2>
            <div className="flex flex-wrap justify-center mx-5 mb-16">
                <div className="flex flex-wrap justify-center">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-2">
                        <img src="/Resourcity/images/Tokens/Farm Tokens/Sugar Cane.png" alt="road" className="w-full h-64 object-contain" />
                        <div className="font-bold text-xl mb-2 text-center">Sugar Cane x10</div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-2">
                        <img src="/Resourcity/images/Tokens/Farm Tokens/Sweet Potato.png" alt="road" className="w-full h-64 object-contain" />
                        <div className="font-bold text-xl mb-2 text-center">Sweet Potato x10</div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-2">
                        <img src="/Resourcity/images/Tokens/Farm Tokens/Water Catchment.png" alt="road" className="w-full h-64 object-contain" />
                        <div className="font-bold text-xl mb-2 text-center">Water Catchment x5</div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-2">
                        <img src="/Resourcity/images/Tokens/Farm Tokens/Rainwater.png" alt="road" className="w-full h-64 object-contain" />
                        <div className="font-bold text-xl mb-2 text-center">Rainwater x10</div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-2">
                        <img src="/Resourcity/images/Tokens/Farm Tokens/Compost.png" alt="road" className="w-full h-64 object-contain" />
                        <div className="font-bold text-xl mb-2 text-center">Compost x8</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center mx-5">
                <div className="flex flex-wrap justify-center">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-2">

                        <div className="font-bold text-xl mb-2 text-center">Superpower Cards x6</div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-2">
                        <div className="font-bold text-xl mb-2 text-center">Player Tokens x6</div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-2">
                        <div className="font-bold text-xl mb-2 text-center">Instruction Cards x6</div>
                    </div>
                </div>
            </div>




        </div>
    )
}
export default GameComponent;