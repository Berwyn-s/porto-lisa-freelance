function KebijakanGridItem({ icon, title, subtitle }) {
    return (
        <div className="flex flex-wrap py-10 px-8 bg-gray-100 rounded-3xl">
            <img src={icon} alt="Icon" className="w-1/5 h-30 object-contain" />
            <div className="w-1/20"></div>
            <div className="w-3/5">
                <h3 className="text-black text-2xl font-bold pb-1">{title}</h3>
                <p className="text-gray-500 text-lg">{subtitle}</p>
            </div>
        </div>
    );
}

export default KebijakanGridItem;
