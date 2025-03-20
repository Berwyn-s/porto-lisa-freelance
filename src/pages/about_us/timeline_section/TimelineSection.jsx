import { useEffect, useState } from "react";
import TimelineCard from "./TimelineCard";

function TimelineSection() {
    const [isSingleColumn, setIsSingleColumn] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsSingleColumn(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const timelineData = [
        {
            year: "28 Januari 2021",
            title: "Peletakan Batu Pertama",
            subtitle:
                "Peletakan batu pertama oleh Jajaran Board of Directors Astra Credit Companies (ACC) menjadi tanda dimulainya pembangunan ACC Digital Operation Center.",
        },
        {
            year: "23 Maret 2022",
            title: "Peresmian BeriJalan Office",
            subtitle:
                "Diresmikan oleh Sri Sultan Hamengku Buwono X, Berjalan Office resmi menjadi pusat operasional berbasis digital untuk memberikan pelayanan yang terbaik kepada pelanggan dan partner bisnis.",
        },
        {
            year: "13 September 2022",
            title: "Brand Activation BeriJalan Techno Center",
            subtitle:
                "Diresmikannya kantor operasional Techno Center untuk membantu pelangganmengembangkan produk dan layanan digital sekaligus sebagai titik temu bagi komunitas digital di Yogyakarta",
        },
        {
            year: "16 Januari 2023",
            title: "Penghargaan ACC Improvement Awards",
            subtitle:
                "Meraih penghargaan Juara 1 kategori Quality Control Project dalam ajang ACC Improvement Awards melalui project Berijalan.",
        },
        {
            year: "24 Maret 2023",
            title: "Peringatan 1 Tahun Berijalan Office",
            subtitle:
                "Berjalan beriniatif untuk berbagi dalam kegiatan berbuka puasa, pemberian beasiswa kepada komunitas difabel, dan pembagian bibit pohon.",
        },
    ];

    const rightTimeline = timelineData.filter((_, index) => index % 2 == 0);
    const leftTimeline = timelineData.filter((_, index) => index % 2 == 1);

    const countPointSection = (timelineData.length - 1) / 2 + 1;

    return isSingleColumn ? (
        <div className="flex flex-col gap-10 mx-5">
            <h3 className="text-2xl font-bold text-black text-center w-full self-end">
                Our History Journey
            </h3>
            {timelineData.map((value, index) => (
                <TimelineCard
                    key={index}
                    position={"right"}
                    year={value.year}
                    title={value.title}
                    subtitle={value.subtitle}
                />
            ))}
        </div>
    ) : (
        <div className="flex flex-row gap-20 mx-20">
            <div className="flex flex-col gap-22">
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-black text-right w-2/3 self-end">
                    Our History Journey
                </h3>
                {leftTimeline.map((data, index) => (
                    <TimelineCard
                        key={index}
                        position={"left"}
                        year={data.year}
                        title={data.title}
                        subtitle={data.subtitle}
                    />
                ))}
            </div>
            <div className="w-4 flex flex-col items-center relative">
                <div className="bg-blue-100 w-2 h-full absolute rounded-full"></div>
                <div className="relative flex flex-col gap-30">
                    {[...Array(Math.round(countPointSection))].map((_, index) => (
                        <div key={index}>
                            <div className="w-[30px] h-[30px] rounded-full bg-blue-900"></div>
                            {index != 0 && index + 1 <= countPointSection ? (
                                <div className="w-[30px] h-[30px] mt-[160px] xl:mt-16 rounded-full bg-blue-900"></div>
                            ) : (
                                <div></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-22">
                {rightTimeline.map((data, index) => (
                    <TimelineCard
                        key={index}
                        position={"right"}
                        year={data.year}
                        title={data.title}
                        subtitle={data.subtitle}
                    />
                ))}
            </div>
        </div>
    );
}

export default TimelineSection;
