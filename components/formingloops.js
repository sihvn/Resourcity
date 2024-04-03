//FormingLoops.js

const FormingLoops = () => {
    return (
        <div className="">
            <h1 className="text-4xl font-bold text-center mb-4 bg-yellow-100 py-6">Forming Loops - Farm </h1>
            <div className="flex flex-wrap justify-center mt-10 mb-10 mx-5">

                <div className="text-lg block max-w-6xl p-4 border border-gray-200 rounded-lg shadow ">

                    <p>Farms help to replenish the Resources that were consumed by Actions. </p>
                    <br></br>
                    <p>You may build a Farm within any closed loop formed by roads. </p>
                    <p className="font-bold">There is no size limit to a Farm.</p>
                    <br></br>
                    <p>Each intersection in a Farm is a Plot. Plots can grow 1 Crop type each. See below for examples. Different Crops can be Harvested to replenish specific Resources:</p>
                    <ul className="list-disc pl-8">
                        <li>Sugar Cane can replenish Fuel</li>
                        <li>Sweet Potato can replenish Food</li>
                        <li>Water Catchments collecting Rainwater can replenish Water</li>
                    </ul>


                    <div class="flex flex-row justify-center items-center mb-4 md:mb-0 py-8 px-16">
                        <img src="/Resourcity/images/formingloop3.png" class="w-56 h-auto object-cover" alt="Image 1" />
                        <img src="/Resourcity/images/formingloop2.png" class="w-56 h-auto object-cover mt-2" alt="Image 2" />
                    </div>


                    <div class="flex flex-col md:flex-row justify-center py-8">
                        <div class="flex flex-col items-center mb-4 md:mb-0 px-8">
                            <img src="/Resourcity/images/formingloop4.png" class="w-64 h-auto object-cover" alt="Image 3" />
                            <img src="/Resourcity/images/formingloop1.png" class="w-64 h-auto object-cover mt-2" alt="Image 4" />
                            <p class="text-center mt-2 px-8">Water Catchments must be placed</p>
                            <p>adjacent to a Green Space.</p>

                        </div>

                        <div class="flex flex-col items-center px-8">
                            <img src="/Resourcity/images/formingloop5.png" class="w-64 h-auto object-cover" alt="Image 5" />
                            <img src="/Resourcity/images/formingloop2.png" class="w-64 h-auto object-cover mt-2" alt="Image 6" />
                            <p class="text-center mt-2 px-8">Farms can be any shape </p>
                            <p> (ie. need not be a square).</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FormingLoops;