import qualityIcon from "../../../assets/about_us/quality_icon.png";
import teamworkIcon from "../../../assets/about_us/teamwork_icon.png";
import satisfactionIcon from "../../../assets/about_us/satisfaction_icon.png";
import integrityIcon from "../../../assets/about_us/integrity_icon.png";
import KebijakanGridItem from "./KebijakanGridItem";

function KebijakanSection() {
    const kebijakanSubtitle =
        "Lorem ipsum dolor sit amet consectetur. Donec eleifend massa dictumst praesent turpis sit sit amet semper.";

    return (
        <div className="mx-20 items-center">
            <h3 className="w-full text-4xl font-bold text-black text-center mb-[40px]">
                Kebijakan Mutu
            </h3>
            <div className="grid grid-flow-row grid-cols-2 gap-10">
                <KebijakanGridItem
                    icon={qualityIcon}
                    title={"Quality"}
                    subtitle={kebijakanSubtitle}
                />
                <KebijakanGridItem
                    icon={teamworkIcon}
                    title={"Teamwork"}
                    subtitle={kebijakanSubtitle}
                />
                <KebijakanGridItem
                    icon={satisfactionIcon}
                    title={"Customer Satisfaction"}
                    subtitle={kebijakanSubtitle}
                />
                <KebijakanGridItem
                    icon={integrityIcon}
                    title={"Integrity"}
                    subtitle={kebijakanSubtitle}
                />
            </div>
        </div>
    );
}

export default KebijakanSection;
