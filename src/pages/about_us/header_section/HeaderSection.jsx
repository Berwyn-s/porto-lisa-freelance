import StatsItem from "./StatsItem";

function HeaderSection() {
    const stats = [
        { label: "Trusted by Company", value: "35+" },
        { label: "Order Completed", value: "1.2K" },
        { label: "Clients Satisfaction", value: "98%" },
        { label: "Years Experience", value: "5+" },
    ];

    return (
        <div className="relative">
            {/* Banner */}
            <div className="bg-blue-800 text-center pt-5 pb-10 px-8 sm:pt-10 sm:pb-15 sm:px-12 md:pt-15 md:pb-20 md:px-23 lg:pt-20 lg:px-30 xl:pb-30 xl:px-40 relative">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold w-4/5 text-left">
                    Kenali kami untuk <span className="text-berijalan-green">berijalan</span> mudah
                    bagi bisnis mu
                </h1>
            </div>

            {/* Stats */}
            <div className="bg-white text-black p-2 sm:p-4 md:p-6 xl:p-8 rounded-lg flex justify-around shadow-lg absolute -bottom-12 sm:-bottom-15 md:-bottom-22 left-1/2 transform -translate-x-1/2 w-3/4 gap-6">
                {stats.map((stat, index) => (
                    <StatsItem key={index} value={stat.value} label={stat.label} />
                ))}
            </div>
        </div>
    );
}

export default HeaderSection;
