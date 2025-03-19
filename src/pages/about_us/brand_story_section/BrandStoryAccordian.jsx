import { FaAngleUp } from "react-icons/fa6";

function BrandStoryAccordian({ onClick, isActive, index, icon, title, subtitle }) {
    return (
        <div key={index} className="border-b border-gray-300">
            <button
                className="w-full flex justify-between items-center p-4 text-left text-lg font-semibold bg-gray-100 hover:bg-gray-200 transition-all"
                onClick={() => onClick(index)}
            >
                <div className="flex flex-row gap-5">
                    <img src={icon} alt="Icon" className="h-10" />
                    <h4 className="self-center">{title}</h4>
                </div>
                <FaAngleUp
                    className={`transition-transform duration-300 ${isActive ? "rotate-180" : ""}`}
                />
            </button>
            <div
                className={`overflow-hidden transition-[max-height] duration-300 ${
                    isActive ? "max-h-40 p-4" : "max-h-0"
                }`}
            >
                <p className="text-gray-700">{subtitle}</p>
            </div>
        </div>
    );
}

export default BrandStoryAccordian;
