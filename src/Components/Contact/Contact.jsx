import { FaPhoneAlt } from "react-icons/fa";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { FaFax } from "react-icons/fa";

const Contact = () => {
    return (
        <div id="contact" className="mt-16 ">
            {/* section title */}
            <h2 className="text-3xl md:text-4xl text-center font-bold">Contact me</h2>
            <p className="text-center text-xl">My <span className="italic">Talent</span></p>
            {/* Contact info */}
            <div className="flex flex-col lg:flex-row gap-5 justify-center md:items-center p-5 ">
                <div className="pt-2 grid grid-cols-1 md:grid-cols-2 gap-10  ">
                    <div className="p-5 w-full md:w-[250px] h-[250px] flex flex-col justify-center items-center bg-base-100 rounded-md ">
                        <HiMiniBuildingOffice2 className="text-5xl text-[#89D8E3] mb-2" />
                        <p className="text-xl font-bold ">Our Main Office</p>
                        <p>SoHo 94 Broadway St New York, NY 1001</p>
                    </div>
                    <div className="p-5 w-full md:w-[250px] h-[250px] flex flex-col justify-center items-center bg-base-100 rounded-md">
                        <FaPhoneAlt className="text-5xl text-[#89D8E3] mb-2" />
                        <p className="text-xl font-bold">Phone number</p>
                        <p>+91-9212321321</p>
                    </div>
                    <div className="p-5 w-full md:w-[250px] h-[250px] flex flex-col justify-center items-center bg-base-100 rounded-md">
                        <FaFax className="text-5xl text-[#89D8E3]
                        mb-2" />
                        <p className="text-xl font-bold">Fax</p>
                        <p>portfolio3@gmail.com</p>
                    </div>
                    <div className="p-5 w-full md:w-[250px] h-[250px] flex flex-col justify-center items-center bg-base-100 rounded-md">
                        <MdEmail className="text-5xl text-[#89D8E3] mb-2" />
                        <p className="text-xl font-bold">Email</p>
                        <p>portfolio3@gmail.com</p>
                    </div>

                </div>

                <div className="p-8  rounded-lg flex flex-col gap-2 w-full lg:w-1/2 bg-gradient-to-tr from-[#ac50ef] via-[#7059fb] to-[#23668a]">
                    <h2 className="text-4xl font-bold mb-4 text-center">Contact Us</h2>
                    <input
                        type="text"
                        placeholder="Enter your Name"
                        className="w-full p-2 mb-2 rounded-md"
                    />
                    <input
                        type="email"
                        placeholder="Enter a valid email address"
                        className="w-full p-2 mb-4 rounded-md"
                    />
                    <textarea className="p-2" name="messege"  placeholder="Write Your Message here..." id="" cols="30" rows="11"></textarea>
                    <button className="inline-block border border-white text-white py-2 px-4 rounded hover:bg-white hover:text-black transition duration-700 ease-in-out font-bold ">
                        SUBMIT
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Contact;