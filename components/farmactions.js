//FarmActions.js

const FarmActions = () => {
    return (
        <div className="">
            <h1 className="text-4xl font-bold mb-4 text-center bg-yellow-100 py-6">Farming</h1>
            <p className="text-lg text-center" >Farming takes place in 3 stages: Plant, Grow, Harvest.</p>
            <br></br>
            <p className="text-lg font-bold text-center px-4">   In each turn, you can make at most 1 farming Action per Plot.</p>
            <div className="flex flex-wrap justify-center mt-10 mb-10 mx-5">
                <div className="text-lg block max-w-6xl p-4 bg-lime-100 border border-gray-200 rounded-lg shadow ">
                    <h1 className="text-4xl font-bold mb-4">Plant </h1>
                    <p>First, Plant a Crop in your Farm.</p>
                    <br></br>
                    <p>Planting is 1 Action, and costs Resources. Players must be adjacent to a Plot to Plant there.</p>
                    <br></br>
                    <p className="text-lg font-bold">To Plant,</p>
                    <p>1. Move the Resource tokens
                        <img src="/Resourcity/images/Tokens/Resource Tokens/Food.png" className="inline h-10 w-12 px-1 " />
                        <img src="/Resourcity/images/Tokens/Resource Tokens/Fuel.png" className="inline h-10 w-12 px-1" />
                        <img src="/Resourcity/images/Tokens/Resource Tokens/Water.png" className="inline h-10 w-12 px-1" />
                        from the Resource Pool to the Used Pile. Each Crop type requires a different number of Resources in order to be built.</p>
                    <p>See Instruction Card</p>

                    <p>2. (Water Catchment only) Place a Water Catchment token
                        <img src="/Resourcity/images/Tokens/Farm Tokens/Water Catchment.png" className="inline h-12 w-13 px-1 " />
                        on the Plot.</p>
                    <p>3. Place 1 corresponding Crop token
                        <img src="/Resourcity/images/Tokens/Farm Tokens/Sugar Cane.png" className="inline h-12 w-13 px-1 " />
                        <img src="/Resourcity/images/Tokens/Farm Tokens/Sweet Potato.png" className="inline h-12 w-13 px-1 " />
                        <img src="/Resourcity/images/Tokens/Farm Tokens/Rainwater.png" className="inline h-12 w-12 px-1" />
                        on the Plot.</p>
                </div>
            </div>

            <div className="flex flex-wrap justify-center mt-10 mb-10 mx-5">
                <div className="text-lg block max-w-6xl p-4 bg-yellow-100 border border-gray-200 rounded-lg shadow ">
                    <h1 className="text-4xl font-bold mb-4">Grow </h1>
                    <p>Next, Grow your Crops.</p>
                    <br></br>
                    <p>Growing is 1 Action, and does not cost Resources. Players must be adjacent to a Plot to Grow there.`</p>
                    <br></br>
                    <p>To Grow Crops, place 1 Crop token
                        <img src="/Resourcity/images/Tokens/Farm Tokens/Sugar Cane.png" className="inline h-12 w-13 px-1 " />
                        <img src="/Resourcity/images/Tokens/Farm Tokens/Sweet Potato.png" className="inline h-12 w-13 px-1 " />
                        <img src="/Resourcity/images/Tokens/Farm Tokens/Rainwater.png" className="inline h-12 w-12 px-1" />
                        on the Plot. Each Crop type needs a different number of Crop tokens before it can produce a Harvest.       </p>
                    <br></br>
                    <div className="pr-4">
                        <h2 className="text-lg font-semibold">Example</h2>
                        <p>You must have 3 Sugar Cane tokens on a Plot before you can proceed to Harvest. </p>
                    </div>
                    <div className="pl-4">
                    </div>
                    <p>Remember, in each turn, you can make at most 1 farming Action per Plot. </p>
                    <p>You can only Grow Crops on each Plot once per turn, but can Grow Crops in multiple different Plots per turn.  </p>
                    <p>You may not Grow and Harvest Crops immediately from a Plot during the same turn.</p>
                </div>
            </div>

            <div className="flex flex-wrap justify-center mt-10 mb-10 mx-5">
                <div className="text-lg block max-w-6xl p-4 bg-blue-100 border border-gray-200 rounded-lg shadow ">
                    <h1 className="text-4xl font-bold mb-4">Harvest </h1>
                    <p>Next, Grow your Crops.</p>
                    <br></br>
                    <p>Growing is 1 Action, and does not cost Resources. Players must be adjacent to a Plot to Grow there.  </p>
                    <br></br>
                    <p>To Grow Crops, place 1 Crop token on the Plot. Each Crop type needs a different number of Crop tokens before it can produce a Harvest.</p>
                    <br></br>
                    <div className="pr-4">
                        <h2 className="text-lg font-semibold">Example</h2>
                        <p>Finally, you can Harvest.</p>
                        <br></br>
                        <p>Harvesting is 1 Action, and does not cost Resources. Players must be adjacent to a Plot to Harvest there.  </p>
                        <br></br>
                        <p>Once a Plot has reached the number of Crop tokens required for a Harvest, you must Harvest all Crop tokens from that Plot.</p>
                        <br></br>
                        <p>To Harvest,</p>
                        <br></br>
                        <p>  1. Remove the complete set of Crop tokens from the board and keep them with you. (Water Catchment only) Leave the Water Catchment token in place. </p>
                        <p>  2. (Sugar Cane/Sweet Potato only) Collect 1 Compost token and immediately place it on the Plot you just Harvested from. See the Compost section below for more details.</p>
                        <img src="/Resourcity/images/Tiles/Roads/Community Centre.png" className=" inline h-32 w-32 px-1 " />
                        <div className="flex flex-warp justify-center">
                            <p> 3. Once you are standing on a Community Centre tile, you may exchange your Crop tokens
                                <img src="/Resourcity/images/Tokens/Farm Tokens/Sugar Cane.png" className="inline h-12 w-13 px-1 " />
                                <img src="/Resourcity/images/Tokens/Farm Tokens/Sweet Potato.png" className="inline h-12 w-13 px-1 " />
                                <img src="/Resourcity/images/Tokens/Farm Tokens/Rainwater.png" className="inline h-12 w-12 px-1" />
                                for the corresponding Resource tokens
                                <img src="/Resourcity/images/Tokens/Resource Tokens/Food.png" className="inline h-10 w-12 px-1 " />
                                <img src="/Resourcity/images/Tokens/Resource Tokens/Fuel.png" className="inline h-10 w-12 px-1" />
                                <img src="/Resourcity/images/Tokens/Resource Tokens/Water.png" className="inline h-10 w-12 px-1" />
                                (Move Harvested Resource tokens from ‘Used’ to the ‘Available’ pile in the Resource Pool). See the table on your Instruction Card. </p>

                        </div>

                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-center mt-10 mb-10 mx-5">
                <div className="text-lg block max-w-6xl p-4 bg-amber-50 border border-gray-200 rounded-lg shadow ">
                    <h1 className="text-4xl font-bold mb-4">Compost</h1>
                    <p>Plots with a Compost token have healthier soil and can Grow Crops faster. </p>
                    <br></br>
                    <p>Compost tokens act as a free Crop token (for Sugar Cane and Sweet Potato only). This means that you require 1 less Crop token before you can proceed to Harvest. </p>
                    <br></br>
                    <p>Note: You must still consume Resources to Plant a Crop at that Plot. </p>
                    <br></br>
                    <img src="/Resourcity/images/composttiles.png" alt="Your Image" className="inline h-32 w-32" />
                    <h2 className="text-lg font-semibold">Example</h2>
                    <p>Instead of requiring 3 Sugar Cane tokens on a Plot, you only require 2 Sugar Cane tokens and 1 Compost token before you can proceed to Harvest.</p>

                    <p>When Harvesting, remove both the Compost and Crop tokens before exchanging them for Resources at any Community Centre.</p>
                </div>
            </div>
        </div>
    )
}
export default FarmActions;