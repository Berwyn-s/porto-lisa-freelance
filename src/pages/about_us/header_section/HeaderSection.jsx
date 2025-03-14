import StatsItem from "./StatsItem";

function HeaderSection() {
    const stats = [
        { label: "Trusted by Company", value: "35+" },
        { label: "Order Completed", value: "1.2K" },
        { label: "Clients Satisfaction", value: "98%" },
        { label: "Years Experience", value: "5+" },
    ];

    return (
        <div className="relative bg-red-300">
            {/* Banner */}
            <div className="bg-blue-800 text-center pt-20 pb-40 px-40 relative">
                <h1 className="text-6xl text-white font-bold w-4/5 text-left">
                    Kenali kami untuk <span className="text-green-300">berijalan</span> mudah bagi
                    bisnis mu
                </h1>
            </div>

            {/* Stats */}
            <div className="bg-white text-black p-8 rounded-lg mx-10 flex justify-around shadow-lg absolute -bottom-15 left-1/2 transform -translate-x-1/2 w-3/4">
                {stats.map((stat, index) => (
                    <StatsItem key={index} value={stat.value} label={stat.label} />
                ))}
            </div>
        </div>
    );
}

export default HeaderSection;
