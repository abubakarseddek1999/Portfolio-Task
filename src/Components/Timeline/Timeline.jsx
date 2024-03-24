import { list } from 'postcss';
import React, { useState, useEffect } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Timeline = () => {
    const [timelineData, setTimelineData] = useState([]);

    useEffect(() => {
        fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
            .then(res => res.json())
            .then(data => setTimelineData(data?.user?.timeline))
    }, [])
    console.log(timelineData);
    // Education data filter
    const educationData = timelineData.filter(item => item.forEducation)
    // experience data filter
    const experienceData = timelineData.filter(item => !item.forEducation)
    console.log("educationData",educationData);
    console.log("experienceData",experienceData);

    const [activeIndex, setActiveIndex] = useState(null);
    const toggleAccordion = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };


    const [eduactiveIndex, edusetActiveIndex] = useState(null);
    const edutoggleAccordion = (index) => {
        edusetActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };



    return (
        <div className="my-16 p-5">
            <h2 className="text-5xl text-center uppercase  font-bold ">Timeline</h2>
            <p className='text-xl italic text-center mb-10'>My Story</p>
            
            <div className='flex justify-between gap-5'>
                <div>
                    <p className='text-3xl font-bold text-center m-5'>Education</p>
                    {/* Education info */}
                    <div className="grid gap-4">
                        {educationData?.map((item, index) => (
                            <div key={index} className="bg-white  rounded-md overflow-hidden shadow-md ">
                                <div
                                    className={`p-6 cursor-pointer flex justify-between items-center  bg-gradient-to-tr from-[#ac50ef] via-[#7059fb] to-[#23668a]  ${eduactiveIndex === index ? 'bg-clip-border p-8  shadow-md' : 'border-b border-black'
                                        }`}
                                    onClick={() => edutoggleAccordion(index)}
                                >
                                    <span className="text-lg font-semibold">question Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, velit?</span>
                                    <span className="text-xl">{eduactiveIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                                </div>
                                {eduactiveIndex === index && (
                                    <div className="p-6 bg-fifthColor border-b-2">
                                        <p className='text-xl font-bold mb-5'>{item?.company_name}</p>
                                        <div className='flex justify-between items-center mb-5'>
                                            <p className='text-xl italic'>{item?.jobTitle}</p>
                                            <p className='font-bold'>{item?.startDate?.slice(0, 4)}-{item?.endDate?.slice(0, 4)}, <span>{item?.jobLocation}</span></p>
                                        </div>
                                        <div className='mb-5'>
                                            <p>{item?.summary}</p>
                                        </div>
                                        
                                        <div>
                                            <ul className='list-disc'>
                                                {
                                                    item?.bulletPoints
                                                    ?.map(item =>  <li key={item.id}>{item}</li>)
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                
                 {/* Experience info*/}
                <div>
                    <p className='text-3xl font-bold text-center m-5'>Experience</p>
                    <div className="grid gap-4">
                        {experienceData?.map((item, index) => (
                            <div key={index} className="bg-white  rounded-md overflow-hidden shadow-md ">
                                <div
                                    className={`p-6 cursor-pointer flex justify-between items-center  bg-gradient-to-tr from-[#ac50ef] via-[#7059fb] to-[#23668a]  ${activeIndex === index ? 'bg-clip-border p-8  shadow-md' : 'border-b border-black'
                                        }`}
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <span className="text-lg font-semibold">question Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, velit?</span>
                                    <span className="text-xl">{activeIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                                </div>
                                {activeIndex === index && (
                                    <div className="p-6 bg-fifthColor border-b-2">
                                        <p className='text-xl font-bold mb-5'>{item?.company_name}</p>
                                        <div className='flex justify-between items-center mb-5'>
                                            <p className='text-xl italic'>{item?.jobTitle}</p>
                                            <p className='font-bold'>{item?.startDate?.slice(0, 4)}-{item?.endDate?.slice(0, 4)}, <span>{item?.jobLocation}</span></p>
                                        </div>
                                        <div className='mb-5'>
                                            <p>{item?.summary}</p>
                                        </div>
                                        
                                        <div>
                                            <ul className='list-disc'>
                                                {
                                                    item?.bulletPoints
                                                    ?.map(item =>  <li key={item.id}>{item}</li>)
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
