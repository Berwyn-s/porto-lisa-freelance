import qualityIcon from "../../../assets/about_us/quality_icon.png";
import teamworkIcon from "../../../assets/about_us/teamwork_icon.png";
import satisfactionIcon from "../../../assets/about_us/satisfaction_icon.png";
import integrityIcon from "../../../assets/about_us/integrity_icon.png";
import KebijakanGridItem from "./KebijakanGridItem";

function KebijakanSection() {
    const policies = [
        {
            icon: qualityIcon,
            title: "Quality",
            subtitle:
                "Proses cepat dan akurat dengan mentalitas perbaikan berkelanjutan untuk hasil optimal dan terukur.",
        },
        {
            icon: teamworkIcon,
            title: "Teamwork",
            subtitle:
                "Bersinergi melalui interaksi yang positif dan terbuka, dengan komitmen mencapai target perusahaan.",
        },
        {
            icon: satisfactionIcon,
            title: "Customer Satisfaction",
            subtitle:
                "Memberikan pengalaman terbaik bagi pelanggan melalui pelayanan yang andal dan terpercaya.",
        },
        {
            icon: integrityIcon,
            title: "Integrity",
            subtitle:
                "Berani menaati peraturan dengan berlandaskan etika, profesionalisme, dan rasa tanggung jawab.",
        },
    ];

    return (
        <div className="mx-5 xl:mx-20 items-center">
            {/* Section Title */}
            <h3 className="w-full text-2xl sm:text-3xl xl:text-4xl font-bold text-black text-center mb-6 sm:mb-[40px]">
                Kebijakan Mutu
            </h3>

            {/* Grid Items */}
            <div className="flex flex-col gap-5 md:grid md:grid-flow-row md:grid-cols-2 md:gap-10">
                {policies.map((policy, index) => (
                    <KebijakanGridItem
                        key={index}
                        icon={policy.icon}
                        title={policy.title}
                        subtitle={policy.subtitle}
                    />
                ))}
            </div>
        </div>
    );
}

export default KebijakanSection;
