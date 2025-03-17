function StatsItem({ value, label }) {
    return (
        <div className="text-center">
            <p className="text-xl sm:text-2xl md:text-3xl xl:text-5xl font-bold">{value}</p>
            <p className="text-[9px] mt-1 sm:text-xs md:text-sm xl:text-sm xl:mt-3">{label}</p>
        </div>
    );
}

export default StatsItem;
