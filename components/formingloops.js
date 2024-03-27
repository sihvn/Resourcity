//FormingLoops.js

const FormingLoops = () => {
    return (
        <div className="container justify-center mx-0 mt-5 px-0 py-0">
            <div className="flex flex-wrap justify-center mt-10 mb-10 mx-5">
                <div className="text-lg block max-w-6xl p-4 bg-white border border-gray-200 rounded-lg shadow ">
                    <h1 className="text-4xl font-bold mb-4">Forming Loops - Farm </h1>
                    <p>Farms help to replenish the Resources that were consumed by Actions. </p>
                    <br></br>
                    <p>You may build a Farm within any closed loop formed by roads. </p>
                    <p className="font-bold">There is no size limit to a Farm.</p>
                    <br></br>
                    <p>Each intersection in a Farm is a Plot. Plots can grow 1 Crop type each. See below for examples. Different Crops can be Harvested to replenish specific Resources:</p>
                    <p>Sugar Cane can replenish Fuel</p>
                    <p>Sweet Potato can replenish Food</p>
                    <p>Water Catchments collecting Rainwater can replenish Water</p>
                    <div className="pl-4">
                        <img src="/Resourcity/images/harvest.jpg" alt="Your Image" class="w-50 h-50" />
                    </div>
                    <p>Water Catchments must be placed adjacent to a Green Space.</p>
                    <p>Farms can be any shape (ie. need not be a square). </p>

                </div>
            </div>
        </div>
    )
}
export default FormingLoops;