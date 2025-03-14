import TimelineCard from "./TimelineCard";

function TimelineSection() {
    const timelineData = [
        {
            year: "2018",
            title: "Lorem Ipsum",
            subtitle:
                "Lorem ipsum dolor sit amet consectetur. Mauris massa odio fermentum dignissim tincidunt nulla dictum enim. Duis cras eu non in egestas ultrices metus enim.",
        },
        {
            year: "2019",
            title: "Lorem Ipsum",
            subtitle:
                "Lorem ipsum dolor sit amet consectetur. Mauris massa odio fermentum dignissim tincidunt nulla dictum enim. Duis cras eu non in egestas ultrices metus enim.",
        },
        {
            year: "2020",
            title: "Lorem Ipsum",
            subtitle:
                "Lorem ipsum dolor sit amet consectetur. Mauris massa odio fermentum dignissim tincidunt nulla dictum enim. Duis cras eu non in egestas ultrices metus enim.",
        },
        {
            year: "2021",
            title: "Lorem Ipsum",
            subtitle:
                "Lorem ipsum dolor sit amet consectetur. Mauris massa odio fermentum dignissim tincidunt nulla dictum enim. Duis cras eu non in egestas ultrices metus enim.",
        },
        {
            year: "2022",
            title: "Lorem Ipsum",
            subtitle:
                "Lorem ipsum dolor sit amet consectetur. Mauris massa odio fermentum dignissim tincidunt nulla dictum enim. Duis cras eu non in egestas ultrices metus enim.",
        },
    ];

    const rightTimeline = timelineData.filter((_, index) => index % 2 == 0);
    const leftTimeline = timelineData.filter((_, index) => index % 2 == 1);

    const countPointSection = (timelineData.length - 1) / 2 + 1;

    return (
        <div className="flex flex-row gap-20 mx-20">
            <div className="flex flex-col gap-22">
                <h3 className="text-4xl font-bold text-black text-right w-2/3 self-end">
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
                <div className="relative flex flex-col gap-35">
                    {[...Array(Math.round(countPointSection))].map((_, index) => (
                        <div>
                            <div className="w-[30px] h-[30px] rounded-full bg-blue-900"></div>
                            {index != 0 && index + 1 <= countPointSection ? (
                                <div className="w-[30px] h-[30px] mt-11 rounded-full bg-blue-900"></div>
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
