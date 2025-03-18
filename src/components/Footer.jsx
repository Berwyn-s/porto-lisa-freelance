
function MenuTitle({title}){
    return (
        <h1 className="mb-6 font-montserrat font-medium text-white text-lg">{title}</h1>
    )
}

function MenuItem({name}){
    return (
        <h2 className="font-light mb-2">{name}</h2>
    )
}

function Footer() {
    return (
        <div className="bg-[#0038B2] w-full">
            <div className="max-w-[1226px] mx-auto flex flex-row justify-around p-20">
                <img className="max-h-[44px]" src="src/assets/berijalan_logo_white.png" alt="" />
                <div className="flex flex-col">
                    <MenuTitle title={"Learn More"}/>
                    <MenuItem name={"About Us"}/>
                    <MenuItem name={"Contact Us"}/>
                    <MenuItem name={"Legal Policy"}/>
                    <MenuItem name={"Career"}/>
                    <MenuItem name={"Promotion"}/>
                    <MenuItem name={"Blog"}/>
                </div>
                <div className="flex flex-col">
                    <MenuTitle title={"Layanan"}/>
                    <MenuItem name={"Techno Center"}/>
                    <MenuItem name={"Telephony Center"}/>
                    <MenuItem name={"Operations Center"}/>
                </div>
                <div className="flex flex-col">
                    <MenuTitle title={"Contact Us"}/>
                    <h2>Sales Representative: <span className="font-bold">123-456-78</span></h2>
                </div>
                <div className="flex flex-col">
                    <MenuTitle title={"Social"}/>
                    <div className="flex flex-row gap-6">
                        <img src="src/assets/social_media/facebook.png" alt="" />
                        <img src="src/assets/social_media/instagram.png" alt="" />
                        <img src="src/assets/social_media/twitter.png" alt="" />
                        <img src="src/assets/social_media/youtube.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;