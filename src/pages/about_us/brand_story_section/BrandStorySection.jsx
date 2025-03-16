import { useState } from "react";
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

    return (
        <div className="mx-19 items-center">
            {/* Section Title */}
            <h3 className="w-full text-4xl font-bold text-black text-center mb-[40px]">
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
