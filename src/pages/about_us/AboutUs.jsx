import valueImage1 from "../../assets/value_image_1.png";
import valueImage2 from "../../assets/value_image_2.png";
import misionIcon from "../../assets/mision_icon.png";
import visionIcon from "../../assets/vision_icon.png";
import qualityIcon from "../../assets/quality_icon.png";
import teamworkIcon from "../../assets/teamwork_icon.png";
import satisfactionIcon from "../../assets/satisfaction_icon.png";
import integrityIcon from "../../assets/integrity_icon.png";
import VisionMisionComp from "./VisionMisionComp";
import KebijakanComp from "./KebijakanComp";
import StatsItem from "./StatsItem";

function AboutUs() {
    const valueSubtitle =
        "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.";
    const vmSubtitle =
        "Leverage agile frameworks to provide a robust synopsis for strategy foster.";
    const kebijakanSubtitle =
        "Lorem ipsum dolor sit amet consectetur. Donec eleifend massa dictumst praesent turpis sit sit amet semper.";

    return (
        <div className="">
            <div className="relative">
                {/* Header Section */}
                <div className="bg-blue-800 text-center pt-20 pb-40 px-40 relative">
                    <h1 className="text-6xl text-white font-bold w-4/5 text-left">
                        Kenali kami untuk <span className="text-green-300">berijalan</span> mudah
                        bagi bisnis mu
                    </h1>
                </div>

                {/* Stats Section */}
                <div className="bg-white text-black p-8 rounded-lg mx-10 flex justify-around shadow-lg absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-3/4">
                    <StatsItem value={"35+"} label={"Trusted by Company"} />
                    <StatsItem value={"1.2K"} label={"Order Completed"} />
                    <StatsItem value={"98%"} label={"Clients Satisfaction"} />
                    <StatsItem value={"5+"} label={"Years Experience"} />
                </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-wrap px-25 py-16 items-center">
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
                        <VisionMisionComp
                            icon={visionIcon}
                            title={"Vision"}
                            subtitle={vmSubtitle}
                        />

                        <VisionMisionComp
                            icon={misionIcon}
                            title={"Mision"}
                            subtitle={vmSubtitle}
                        />
                    </div>
                </div>
            </div>

            {/* Kebijakan Mutu */}
            <div className="px-20 items-center">
                <h3 className="w-full text-4xl font-bold text-black text-center">Kebijakan Mutu</h3>
                <div className="grid grid-flow-row grid-cols-2 gap-10 pt-8">
                    <KebijakanComp
                        icon={qualityIcon}
                        title={"Quality"}
                        subtitle={kebijakanSubtitle}
                    />
                    <KebijakanComp
                        icon={teamworkIcon}
                        title={"Teamwork"}
                        subtitle={kebijakanSubtitle}
                    />
                    <KebijakanComp
                        icon={satisfactionIcon}
                        title={"Customer Satisfaction"}
                        subtitle={kebijakanSubtitle}
                    />
                    <KebijakanComp
                        icon={integrityIcon}
                        title={"Integrity"}
                        subtitle={kebijakanSubtitle}
                    />
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
