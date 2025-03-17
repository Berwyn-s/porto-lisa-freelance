function TimelineCard({ position, year, title, subtitle }) {
    return (
        <div className={position === "left" ? "text-right" : "text-left"}>
            <h3 className="text-blue-900 font-bold text-xl md:text-2xl">{year}</h3>
            <p className="text-black font-bold text-base mt-2 mb-1 md:text-lg md:mt-[16px] md:mb-[8px]">
                {title}
            </p>
            <p className="text-gray-600 text-sm md:text-base">{subtitle}</p>
        </div>
    );
}

export default TimelineCard;
