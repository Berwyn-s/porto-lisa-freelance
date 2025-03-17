function BrandStoryTab({ isActive, number, title, onClick }) {
    const numbering = number.padStart(2, "0");

    return (
        <div
            className={
                "flex-grow py-6 rounded-2xl cursor-pointer " +
                (isActive ? "bg-blue-900 text-white" : "hover:bg-blue-200 bg-gray-100 text-black")
            }
            onClick={onClick}
        >
            <h4 className="text-base lg:text-lg xl:text-xl font-bold text-center">
                {numbering}. {title}
            </h4>
        </div>
    );
}

export default BrandStoryTab;
