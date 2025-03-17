import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa6";
import solutionImage from "../../../assets/about_us/solution_ways_image.png";
import solutionIcon from "../../../assets/about_us/solution_ways_icon.png";
import innovImage from "../../../assets/about_us/sparks_of_innovation_image.png";
import innovIcon from "../../../assets/about_us/sparks_of_innovation_icon.png";
import collabImage from "../../../assets/about_us/collaboration_image.png";
import collabIcon from "../../../assets/about_us/collaboration_icon.png";
import BrandStoryTab from "./BrandStoryTab";
import BrandStoryTabBody from "./BrandStoryTabBody";

function BrandStorySection() {
    const tabs = [
        {
            title: "Solution Ways",
            subtitle:
                "Jalan yang mempertemukan 3 elemen yang menjadi pilar utama dalam perusahaan, sehingga dapat memberikan layanan yang solutif bagi kebutuhan pelanggan.",
            image: solutionImage,
            icon: solutionIcon,
        },
        {
            title: "Sparks of Innovations",
            subtitle:
                "Lambang dari pergerakan elevating untuk menghasilkan inovasi dari hasil kolaborasi perusahaan yang reliable.",
            image: innovImage,
            icon: innovIcon,
        },
        {
            title: "Collaboration",
            subtitle:
                "Sebagai melting pot dari pelanggan dan perusahaan yang mampu menjadi partner dan memberikan masa depan yang terbaik.",
            image: collabImage,
            icon: collabIcon,
        },
    ];

    const [tabIndex, setTabIndex] = useState(0);
    const [isSingleColumn, setIsSingleColumn] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsSingleColumn(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return isSingleColumn ? (
        <div>
            <h3 className="w-full text-2xl font-bold text-black text-center mb-[40px]">
                Brand Story
            </h3>
            <div className="mx-5 mt-10">
                {tabs.map((tab, index) => (
                    <div key={index} className="border-b border-gray-300">
                        <button
                            className="w-full flex justify-between items-center p-4 text-left text-lg font-semibold bg-gray-100 hover:bg-gray-200 transition-all"
                            onClick={() => setTabIndex(index)}
                        >
                            <div className="flex flex-row gap-5">
                                <img src={tab.icon} alt="Icon" className="h-10" />
                                <h4 className="self-center">{tab.title}</h4>
                            </div>
                            <FaAngleUp
                                className={`transition-transform duration-300 ${
                                    tabIndex === index ? "rotate-180" : ""
                                }`}
                            />
                        </button>
                        <div
                            className={`overflow-hidden transition-[max-height] duration-300 ${
                                tabIndex === index ? "max-h-40 p-4" : "max-h-0"
                            }`}
                        >
                            <p className="text-gray-700">{tab.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    ) : (
        <div className="mx-19 items-center">
            {/* Section Title */}
            <h3 className="w-full text-2xl lg:text-3xl xl:text-4xl font-bold text-black text-center mb-[40px]">
                Brand Story
            </h3>

            {/* Tabs */}
            <div className="w-full flex gap-10">
                {tabs.map((tab, index) => (
                    <BrandStoryTab
                        key={index}
                        isActive={index === tabIndex}
                        number={(index + 1).toString()}
                        title={tab.title}
                        onClick={() => setTabIndex(index)}
                    />
                ))}
            </div>

            {/* Tabs Body */}
            <BrandStoryTabBody
                title={tabs[tabIndex].title}
                subtitle={tabs[tabIndex].subtitle}
                image={tabs[tabIndex].image}
                icon={tabs[tabIndex].icon}
            />
        </div>
    );
}

export default BrandStorySection;
