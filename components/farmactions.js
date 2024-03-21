//FarmActions.js

const FarmActions = () => {
    return (
        <div className="container mx-0 mt-5 px-0 py-0">
            {/* <div class="flex justify-between"> */}
            <div className="p-4 ">
                <h1 className="text-4xl font-bold mb-4">Plant </h1>
                <p>First, Plant a Plot in your Farm.</p>
                <br></br>
                <p>Planting is 1 Action, and costs Resources. Players must be adjacent to a Plot to Plant there.</p>
                <br></br>
                <p>To Plant,</p>
                <p>  1. Move the Resource tokens from the Resource Pool to the Used Pile. Each Plot type requires a different number of Resources in order to be built.</p>
                <p>See Instruction Card</p>
                <p>  2. (Water Catchment only) Place a Water Catchment token on the Plot.</p>
                <p>  3. Place 1 corresponding Plot token on the Plot.</p>
            </div>
            <div className="p-4 ">
                <h2 className="text-lg font-semibold">Grow</h2>
                <p>Next, Grow your Crops.</p>
                <br></br>
                <p>Growing is 1 Action, and does not cost Resources. Players must be adjacent to a Plot to Grow there.  </p>
                <br></br>
                <p>To Grow Crops, place 1 Crop token on the Plot. Each Crop type needs a different number of Crop tokens before it can produce a Harvest.</p>
                <br></br>
                <div className="pr-4">
                    <h2 class="text-lg font-semibold">Example</h2>
                    <p>You must have 3 Sugar Cane tokens on a Plot before you can proceed to Harvest. </p>
                </div>
                <div className="pl-4">
                    <img src="/Resourcity/images/harvest.jpg" alt="Your Image" class="w-50 h-50" />
                </div>
                <p>Remember, in each turn, you can make at most 1 farming Action per Plot. </p>
                <p>You can only Grow Crops on each Plot once per turn, but can Grow Crops in multiple different Plots per turn.  </p>
                <p>You may not Grow and Harvest Crops immediately from a Plot during the same turn.</p>
            </div>
            {/* </div> */}
            <div className="container mx-auto">
                <div className="p-4 ">
                    <h2 className="text-lg font-semibold">Harvest</h2>
                    <p>Finally, you can Harvest.</p>
                    <br></br>
                    <p>Harvesting is 1 Action, and does not cost Resources. Players must be adjacent to a Plot to Harvest there.  </p>
                    <br></br>
                    <p>Once a Plot has reached the number of Crop tokens required for a Harvest, you must Harvest all Crop tokens from that Plot.</p>
                    <p>To Harvest,</p>
                    <p>  1. Remove the complete set of Crop tokens from the board and keep them with you. (Water Catchment only) Leave the Water Catchment token in place. </p>
                    <p>  2. (Sugar Cane/Sweet Potato only) Collect 1 Compost token and immediately place it on the Plot you just Harvested from. See the Compost section below for more details.</p>
                    <p>  3. Once you are standing on a Community Centre tile, you may exchange your Crop tokens for the corresponding Resource tokens (Move Harvested Resource tokens from ‘Used’ to the ‘Available’ pile in the Resource Pool). See the table on your Instruction Card. </p>
                </div>
            </div>
            {/* </div> */}
            <div className="p-4 ">
                <h2 className="text-lg font-semibold">Compost</h2>
                <p>Plots with a Compost token have healthier soil and can Grow Crops faster. </p>
                <br></br>
                <p>Compost tokens act as a free Crop token (for Sugar Cane and Sweet Potato only). This means that you require 1 less Crop token before you can proceed to Harvest. </p>
                <br></br>
                <p>Note: You must still consume Resources to Plant a Crop at that Plot. </p>
                <br></br>
                <div className="pr-4">
                    <h2 class="text-lg font-semibold">Example</h2>
                    <p>Instead of requiring 3 Sugar Cane tokens on a Plot, you only require 2 Sugar Cane tokens and 1 Compost token before you can proceed to Harvest.</p>
                </div>
                <div className="pl-4">
                    <img src="/Resourcity/images/harvest.jpg" alt="Your Image" class="w-50 h-50" />
                </div>
                <p>When Harvesting, remove both the Compost and Crop tokens before exchanging them for Resources at any Community Centre.</p>
            </div>
        </div>
    )
}
export default FarmActions;