import BrandStorySection from "./brand_story_section/BrandStorySection";
import StatsItem from "./header_section/StatsItem";
import KebijakanSection from "./kebijakan_section/KebijakanSection";
import ValuesSection from "./values_section/ValuesSection";

function AboutUs() {
    return (
        <div className="flex flex-col gap-30">
            <div className="relative bg-red-300">
                {/* Header Section */}
                <div className="bg-blue-800 text-center pt-20 pb-40 px-40 relative">
                    <h1 className="text-6xl text-white font-bold w-4/5 text-left">
                        Kenali kami untuk <span className="text-green-300">berijalan</span> mudah
                        bagi bisnis mu
                    </h1>
                </div>

                {/* Stats Section */}
                <div className="bg-white text-black p-8 rounded-lg mx-10 flex justify-around shadow-lg absolute -bottom-15 left-1/2 transform -translate-x-1/2 w-3/4">
                    <StatsItem value={"35+"} label={"Trusted by Company"} />
                    <StatsItem value={"1.2K"} label={"Order Completed"} />
                    <StatsItem value={"98%"} label={"Clients Satisfaction"} />
                    <StatsItem value={"5+"} label={"Years Experience"} />
                </div>
            </div>

            {/* Our Values */}
            <ValuesSection />

            {/* Kebijakan Mutu */}
            <KebijakanSection />

            {/* Brand Story */}
            <BrandStorySection />
        </div>
    );
}

export default AboutUs;
