
const About = () => {
    return (
        <div className="mt-10 border">
            <p className="text-3xl md:text-4xl font-bold text-center pt-2">About Me</p>
            <div className="flex flex-col md:flex-row p-5">

                {/* image */}
                <div className="flex sm:hidden">
                    <img className="rounded-xl" src="https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706283290608-n4hq7k" alt="" />
                </div>

                {/* Info of admin */}
                <div className="p-16 flex flex-col gap-10 bg-base-100 shadow-xl rounded-2xl ">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold"> I develop 3D visuals user interfaces and web applications</h2>
                    </div>
                    <div>
                        <p>As a React developer with 5 years of experience, I have honed my skills in JavaScript and am currently learning TypeScript to expand my expertise. I pride myself on being a quick learner and attentive listener, which allows me to collaborate effectively with clients to create efficient and scalable solutions. My focus is on developing user-friendly applications that solve real-world problems.</p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-5 justify-between">
                        <div>
                            <p>Name</p>
                            <p className="text-xl font-bold">ABU BAKAR</p>

                        </div>
                        <div>
                            <p>Phone Number</p>
                            <p className="text-xl font-bold">+91-9212321321</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-5 justify-between">
                        <div>
                            <p>Email Address</p>
                            <p className="text-xl font-bold">sdfdkslfjkdsjfk@gmail.com</p>

                        </div>
                        <div>
                            <p>Social Network</p>
                            <p className="text-xl font-bold">+91-9212321321</p>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default About;