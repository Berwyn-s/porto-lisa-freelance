function StatsItem({ value, label }) {
    return (
        <div className="text-center">
            <p className="text-5xl font-bold">{value}</p>
            <p className="text-sm mt-3">{label}</p>
        </div>
    );
}

export default StatsItem;
