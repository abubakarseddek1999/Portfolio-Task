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

        <div className=" flex justify-between flex-col md:flex-row mt-10 p-2 ">
            
            <div className="md:w-1/2 w-full flex flex-col justify-center items-center">

                <div className="py-5 px-6">
                    {/*  info */}
                    <h1 className=" font-semibold text-sm">HELLO, MY NAME IS</h1>
                    <h2 className="text-gray-800 dark:text-white text-4xl font-bold">{heroData?.name}</h2>
                    <p className="text-sm font-semibold">I am  <span className="italic">{heroData?.title}</span></p>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">{heroData?.description}</p>

                    {/* social link */}
                    <div className="flex flex-row mt-5 gap-2">
                        <img className="w-10 h-10 hover:gray-600" src="https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718250873-3038n7.webp" alt="" />
                        <img className="w-10 h-10" src="https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718263294-2lfj67.webp" alt="" />
                        <img className="w-10 h-10" src="https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718346601-xldm.webp" alt="" />




                    </div>

                    {/* dsc of user */}
                    <div className="mt-6">
                        <button className="bg-[#2f9fae] text-white px-4 py-2 rounded-md hover:bg-[#183033] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50">
                            DOWNLOAD CV
                        </button>
                        <div className="flex items-center mt-4">
                            <div className="w-8 h-8 bg-[#2e8d99] rounded-full flex items-center justify-center">
                                
                            </div>
                            <p className="ml-2 text-gray-600 dark:text-gray-300">{heroData?.exp_year} YEARS OF EXPERIENCE</p>
                        </div>
                        <div className="flex items-center mt-2">
                            <div className="w-8 h-8 bg-[#2e8d99] rounded-full flex items-center justify-center">
                                
                            </div>
                            <p className="ml-2 text-gray-600 dark:text-gray-300">{heroData?.some_total} COMPLETED PROJECTS</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* image  */}
            <div className="hidden md:flex justify-end w-1/2">
                <img src="https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706283290608-n4hq7k" alt="John Doe" className="w-full h-full object-cove p-2 md:rounded-full md:max-w-[550px]" />
            </div>
        </div>

    );
};

export default Hero;
