
const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row py-4 md:py-0">
        <div className="flex-1 ">
            <div className="px-8 md:px-0 pt-12 md:pt-16 md:pl-24">
                <h1 className="text-4xl md:text-[5.0rem] font-extrabold leading-none mb-6">
                Branding & website design agency 
                </h1>
                <p className="text-lg w-[90%] mb-2">
                We specialize in visual storytelling by creating cohesive brand and website design solutions for craft breweries, giving lasting impressions to audiences in a digital world. 
                </p>
                <button className="bg-[#f94f4f] text-white py-4 px-8 font-semibold hover:opacity-80">
                    Learn More
                </button>
            </div>
        </div>

        <div className="flex-1 hidden md:flex">
            <img src="./assets/desktop/image-hero.jpg" className="w-full" alt="" />
        </div>
        <div className="flex-1 flex md:hidden">
            <img src="./assets/mobile/image-hero.jpg" className="w-full h-50" alt="" />
        </div>
    </div>
  )
}

export default Hero