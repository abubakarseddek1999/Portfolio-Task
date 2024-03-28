import { useEffect, useState } from "react";

const About = () => {
    const [aboutData, setAboutData] = useState(null);

    useEffect(() => {
        fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
            .then(res => res.json())
            .then(data => setAboutData(data?.user?.about))
    }, [])

    return (
        <div data-aos="fade-up"
            data-aos-duration="2000" className="mt-10 border">
            <p className="text-3xl md:text-4xl font-bold text-center pt-2">About Me</p>
            <p className="text-center italic text-xl">Exploring My Identity</p>
            <div className="bg-base-100 flex flex-col md:flex-row m-2 p-5 rounded-xl shadow-xl mt-10">

                {/* image */}
                <div className="md:w-1/2">
                    <img className="rounded-xl w-full" src={aboutData?.alternateAvatars?.[0]?.url} alt="" />
                </div>

                {/* Info of admin */}
                <div className="md:p-16 m-5 md:w-1/2 flex flex-col gap-10   ">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold"> I develop 3D visuals user interfaces and web applications</h2>
                    </div>
                    <div>
                        <p>As a React developer with 5 years of experience, I have honed my skills in JavaScript and am currently learning TypeScript to expand my expertise. I pride myself on being a quick learner and attentive listener, which allows me to collaborate effectively with clients to create efficient and scalable solutions. My focus is on developing user-friendly applications that solve real-world problems.</p>
                    </div>


                    <div className="flex flex-col lg:flex-row gap-5 justify-between">
                        <div>
                            <p>Name</p>
                            <p className=" font-bold">{aboutData?.name}</p>

                        </div>
                        <div>
                            <p>Phone Number</p>
                            <p className=" font-bold">{aboutData?.phoneNumber}</p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row mt-10 gap-5 justify-between">
                        <div>
                            <p>Email Address</p>
                            <p className="font-bold">{aboutData?.contactEmail}</p>

                        </div>
                        <div>
                            <p className=" lg:text-center">Address</p>
                            <p className="  font-bold">{aboutData?.address}</p>
                        </div>
                    </div>



                </div>

            </div>
        </div>
    );
};

export default About;