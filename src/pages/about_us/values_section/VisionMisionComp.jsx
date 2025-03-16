function VisionMisionComp({ icon, title, subtitle }) {
    return (
        <div className="mt-3 w-full sm:mt-6 sm:w-1/2 md:mt-0">
            <div className="w-11/12">
                <img src={icon} alt="Icon" className="hidden sm:block" />
                <h4 className="text-lg sm:text-xl ld:text-2xl font-bold text-black my-2">
                    {title}
                </h4>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600">{subtitle}</p>
            </div>
        </div>
    );
}

export default VisionMisionComp;
