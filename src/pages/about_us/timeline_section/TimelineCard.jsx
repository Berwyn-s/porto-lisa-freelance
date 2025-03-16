function TimelineCard({ position, year, title, subtitle }) {
    return (
        <div className={position === "left" ? "text-right" : "text-left"}>
            <h3 className="text-blue-900 text-2xl font-bold">{year}</h3>
            <p className="text-black font-bold text-lg mt-[16px] mb-[8px]">{title}</p>
            <p className="text-gray-600">{subtitle}</p>
        </div>
    );
}

export default TimelineCard;
