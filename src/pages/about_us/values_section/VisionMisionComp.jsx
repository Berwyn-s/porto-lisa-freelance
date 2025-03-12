function VisionMisionComp({ icon, title, subtitle }) {
    return (
        <div className="mt-6 w-1/2">
            <div className="w-11/12">
                <img src={icon} alt="Icon" className="" />
                <h4 className="text-2xl font-bold text-black my-1">{title}</h4>
                <p className="text-gray-600">{subtitle}</p>
            </div>
        </div>
    );
}

export default VisionMisionComp;
