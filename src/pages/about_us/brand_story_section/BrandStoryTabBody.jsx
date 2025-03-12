function BrandStoryTabBody({ title, subtitle, image, icon }) {
    return (
        <div className="flex mx-[60px] mt-[74px] px-[80px] gap-30">
            <div className="flex-grow self-center">
                <div className="flex">
                    <img src={icon} alt="Icon" className="" />
                    <h3 className="flex-grow text-3xl text-black font-bold self-center">{title}</h3>
                </div>
                <p className="text-gray-500 text-lg mt-7">{subtitle}</p>
            </div>
            <img src={image} alt="Icon" className="" />
        </div>
    );
}

export default BrandStoryTabBody;
