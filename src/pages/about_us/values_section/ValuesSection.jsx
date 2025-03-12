import valueImage1 from "../../../assets/about_us/value_image_1.png";
import valueImage2 from "../../../assets/about_us/value_image_2.png";
import misionIcon from "../../../assets/about_us/mision_icon.png";
import visionIcon from "../../../assets/about_us/vision_icon.png";
import VisionMisionComp from "./VisionMisionComp";

function ValuesSection() {
    const valueSubtitle =
        "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.";
    const vmSubtitle =
        "Leverage agile frameworks to provide a robust synopsis for strategy foster.";

    return (
        <div className="flex flex-wrap mx-25 items-center">
            {/* Images */}
            <div className="w-full md:w-1/2 p-4 relative">
                <img src={valueImage1} alt="Containers" className="w-full shadow-md relative" />
                <img
                    src={valueImage2}
                    alt="Truck"
                    className="w-1/3 outline-20 outline-white shadow-md absolute -bottom-6 right-4 top z-2"
                />
            </div>

            {/* Values */}
            <div className="w-full md:w-1/2 p-4">
                <h3 className="text-4xl font-bold text-black">Our Value</h3>
                <p className="text-gray-600 mt-2">{valueSubtitle}</p>

                <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

                <div className="w-full flex flex-wrap">
                    <VisionMisionComp icon={visionIcon} title={"Vision"} subtitle={vmSubtitle} />

                    <VisionMisionComp icon={misionIcon} title={"Mision"} subtitle={vmSubtitle} />
                </div>
            </div>
        </div>
    );
}

export default ValuesSection;
