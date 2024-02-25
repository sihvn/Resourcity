//FarmActions.js

const FarmActions = () => {
    return (
        <div class="container mx-0 mt-5 px-0 py-0">
            <div class="flex justify-between">
                <div class="w-1/2 p-4 ">
                    <h1 className="text-4xl font-bold mb-4">Farming </h1>
                    <h2 class="text-lg font-semibold">Build</h2>
                    <p>First, Build a Plot in your Farm.</p>
                    <br></br>
                    <p>Players must be adjacent to a Plot to Build there. Building is 1 Action.</p>
                    <br></br>
                    <p>To Build,</p>
                    <p>  1. Move the Resource tokens from the Resource Pool to the Used Pile. Each Plot type requires a different number of Resources in order to be built. See the table on page 10.</p>
                    <p>  2. (Water Catchment only) Place a Water Catchment token on the Plot.</p>
                    <p>  3. Place 1 corresponding Plot token on the Plot.</p>
                </div>
                <div class="w-1/2 p-4 ">
                    <h2 class="text-lg font-semibold">Plant</h2>
                    <p>Next, Plant a Crop.</p>
                    <br></br>
                    <p>Players must be adjacent to a Plot to Plant there. Planting is 1 Action. Each Crop type needs a different number of Crop tokens before it can produce a Harvest. See the table on page 10. </p>
                    <br></br>
                    <p>To Plant, place 1 Crop token on the Plot. </p>
                    <br></br>
                    <p>Planting does not require Resources. </p>
                    <p>Players can only Plant on each Plot once per turn, but can Plant in multiple different Plots per turn. </p>
                    <p>Players may not Plant and Harvest immediately from a Plot during the same turn.</p>
                </div>
            </div>
            <div class="container mx-auto">
                <div class="p-4 ">
                    <h2 class="text-lg font-semibold">Harvest</h2>
                    <p>Finally, you can Harvest.</p>
                    <br></br>
                    <p>Players must be adjacent to a Plot to Harvest there. Harvesting is 1 Action. </p>
                    <br></br>
                    <p>To Harvest,</p>
                    <p>  1. Remove the complete set of Crop tokens from the board. </p>
                    <p>  2. (Water Catchment only) Leave the Water Catchment in place. </p>
                    <p>  3. Collect the corresponding Harvest. </p>
                    <p>  4. (Sugar Cane/Sweet Potato only) Choose a Harvest Bonus.</p>
                    <p>    a. Fertilizer: Allows 2 Crop types to be built on 1 Crop. Collect 1x Fertilizer token. You may keep Fertilizer in your hand, to use it at other Farms. Each Plot can only have 1 Fertilizer. Fertilizing counts as 1 Action. Once placed, it cannot be moved.  </p>
                    <p>    b. Biofuel: Converts Harvest waste into extra Fuel production. Collect 1x Fuel Resource token.</p>
                    <br></br>
                    <p>Once a Plot has reached the number of Crop tokens required for a Harvest, you must Harvest all Crop tokens from that Plot.</p>
                </div>
                <div class="flex justify-between items-center p-4 mt-4">
                    <div class="w-1/2 pr-4">
                        <h2 class="text-lg font-semibold">Example</h2>
                        <p>You have 3 Sugar Cane tokens on a Plot.</p>
                        <p>Remove all 3 tokens from the board. Take 5 Fuel tokens. </p>
                        <p>You choose a Harvest Bonus: 1x Fertilizer (+1 Fertilizer token) or 1x Biofuel (+1 Fuel token). </p>
                    </div>
                    <div class="w-1/2 pl-4">
                        <img src="/CapstoneProject/images/harvest.jpg" alt="Your Image" class="w-50 h-50" />
                    </div>
                </div>
            </div>
            <div class="w-full p-4 mt-4  border-b-2 pb-8">
                <h2 class="text-lg font-semibold">Moving resources to the resource pool</h2>
                <p>Some Text</p>
            </div>
        </div>
    )
}
export default FarmActions;