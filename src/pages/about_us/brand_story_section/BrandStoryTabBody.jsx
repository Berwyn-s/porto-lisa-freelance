function BrandStoryTabBody({ title, subtitle, image, icon }) {
    return (
        <div className="flex mt-10 lg:mt-20 lg:mx-5 xl:mx-[60px] xl:mt-[74px] px-[80px] gap-30">
            <div className="flex-grow self-center">
                <div className="flex">
                    <img src={icon} alt="Icon" className="" />
                    <h3 className="flex-grow text-2xl xl:text-3xl text-black font-bold self-center">
                        {title}
                    </h3>
                </div>
                <p className="text-gray-500 text-lg mt-2 lg:mt-5 xl:mt-7">{subtitle}</p>
            </div>
            <img src={image} alt="Icon" className="hidden lg:block" />
        </div>
    );
}

export default BrandStoryTabBody;
