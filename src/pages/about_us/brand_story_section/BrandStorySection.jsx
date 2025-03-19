import { useEffect, useState } from "react";
import solutionImage from "../../../assets/about_us/solution_ways_image.png";
import solutionIcon from "../../../assets/about_us/solution_ways_icon.png";
import innovImage from "../../../assets/about_us/sparks_of_innovation_image.png";
import innovIcon from "../../../assets/about_us/sparks_of_innovation_icon.png";
import collabImage from "../../../assets/about_us/collaboration_image.png";
import collabIcon from "../../../assets/about_us/collaboration_icon.png";
import BrandStoryTab from "./BrandStoryTab";
import BrandStoryTabBody from "./BrandStoryTabBody";
import { AnimatePresence, motion } from "motion/react";
import BrandStoryAccordian from "./BrandStoryAccordian";

function BrandStorySection() {
    const tabs = [
        {
            title: "Solution Ways",
            subtitle:
                "Jalan yang menghubungkan tiga pilar utama perusahaan, memastikan layanan solutif yang tepat bagi kebutuhan pelanggan.",
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
                    <BrandStoryAccordian
                        key={index}
                        onClick={() => setTabIndex(index)}
                        isActive={tabIndex === index}
                        index={index}
                        icon={tab.icon}
                        title={tab.title}
                        subtitle={tab.subtitle}
                    />
                ))}
            </div>
        </div>
    ) : (
        <div className="mx-18 items-center">
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
            <AnimatePresence mode="wait">
                <motion.div
                    key={tabIndex}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <BrandStoryTabBody
                        title={tabs[tabIndex].title}
                        subtitle={tabs[tabIndex].subtitle}
                        image={tabs[tabIndex].image}
                        icon={tabs[tabIndex].icon}
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default BrandStorySection;
