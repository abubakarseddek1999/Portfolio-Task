import { useState } from "react";
import { useEffect } from "react";


const Hero = () => {
    const [heroData, setHeroData] = useState(null);

    useEffect(() => {
        fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
            .then(res => res.json())
            .then(data => setHeroData(data?.user?.about))
    }, [])

    // console.log(heroData);
    return (

        <div id="home" className=" flex justify-between flex-col md:flex-row  pt-16  ">
            
            <div className="md:w-1/2 w-full flex flex-col justify-center items-center">

                <div className="py-5 px-6">
                    {/*  info */}
                    <h1 className=" font-semibold text-sm">HELLO, MY NAME IS</h1>
                    <h2 className="text-gray-800 dark:text-white text-4xl font-bold">{heroData?.name}</h2>
                    <p className="text-sm font-semibold">I am  <span className="italic">{heroData?.title}</span></p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">{heroData?.description}</p>

                 

                    {/* dsc of user */}
                    <div className="mt-6">
                        <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-[#183033] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50">
                            DOWNLOAD CV
                        </button>
                        <div className="flex items-center mt-4">
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                
                            </div>
                            <p className="ml-2 text-gray-600 dark:text-gray-300">{heroData?.exp_year} YEARS OF EXPERIENCE</p>
                        </div>
                        <div className="flex items-center mt-2">
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                                
                            </div>
                            <p className="ml-2 text-gray-600 dark:text-gray-300">{heroData?.some_total} COMPLETED PROJECTS</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* image  */}
            <div className="hidden md:flex justify-end w-1/2">
                <img src={heroData?.avatar?.url} alt="John Doe" className="w-full h-full object-cove p-2 md:rounded-full md:max-w-[550px]" />
            </div>
        </div>

    );
};

export default Hero;
