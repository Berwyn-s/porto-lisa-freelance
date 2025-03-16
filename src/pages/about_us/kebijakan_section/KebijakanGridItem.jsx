function KebijakanGridItem({ icon, title, subtitle }) {
    return (
        <div className="flex flex-wrap p-5 bg-gray-100 rounded-3xl">
            <img
                src={icon}
                alt="Icon"
                className="w-1/5 h-30 object-contain hidden sm:block md:hidden lg:block"
            />
            <div className="w-1/20"></div>
            <div className="w-3/5 flex-grow">
                <h3 className="text-black text-lg sm:text-xl md:text-2xl font-bold pb-1">
                    {title}
                </h3>
                <p className="text-gray-500 text-sm lg:text-lg">{subtitle}</p>
            </div>
        </div>
    );
}

export default KebijakanGridItem;
