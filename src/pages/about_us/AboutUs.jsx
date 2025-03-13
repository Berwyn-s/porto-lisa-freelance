import BrandStorySection from "./brand_story_section/BrandStorySection";
import HeaderSection from "./header_section/HeaderSection";
import KebijakanSection from "./kebijakan_section/KebijakanSection";
import LegalNoticeSection from "./legal_notice_section/LegalNoticeSection";
import ValuesSection from "./values_section/ValuesSection";

function AboutUs() {
    return (
        <div className="flex flex-col gap-30">
            {/* Header */}
            <HeaderSection />

            {/* Our Values */}
            <ValuesSection />

            {/* Kebijakan Mutu */}
            <KebijakanSection />

            {/* Brand Story */}
            <BrandStorySection />

            {/* Legal Notice */}
            <LegalNoticeSection />
        </div>
    );
}

export default AboutUs;
