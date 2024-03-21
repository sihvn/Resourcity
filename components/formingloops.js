//FormingLoops.js

const FormingLoops = () => {
    return (
        <div className="container mx-0 mt-5 px-0 py-0">
            {/* <div class="flex justify-between"> */}
            <div className="p-4 ">
                <h1 className="text-4xl font-bold mb-4">Plant </h1>
                <h2 className="text-lg font-semibold">Build</h2>
                <p>Farms help to replenish the Resources that were consumed by Actions. </p>
                <br></br>
                <p>You may build a Farm within any closed loop formed by roads. There is no size limit to a Farm.</p>
                <br></br>
                <p>Each intersection in a Farm is a Plot. Plots can grow 1 Crop type each. See below for examples. Different Crops can be Harvested to replenish specific Resources:</p>
                <p>Sugar Cane can replenish Fuel</p>
                <p>Sweet Potato can replenish Food</p>
                <p>Water Catchments collecting Rainwater can replenish Water</p>
            </div>
        </div>
    )
}
export default FormingLoops;