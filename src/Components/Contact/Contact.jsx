import { FaPhoneAlt } from "react-icons/fa";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { FaFax } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="mt-16 ">
            <div className="flex flex-col lg:flex-row gap-5 p-2 justify-center items-center">
                <div className="p-2 grid grid-cols-2 gap-10  ">
                    <div className="p-5 w-[250px] h-[250px] flex flex-col justify-center items-center bg-slate-400 rounded-md ">
                        <HiMiniBuildingOffice2 className="text-5xl text-[#89D8E3] mb-2" />
                        <p className="text-xl font-bold ">Our Main Office</p>
                        <p>SoHo 94 Broadway St New York, NY 1001</p>
                    </div>
                    <div className="p-5 w-[250px] h-[250px] flex flex-col justify-center items-center bg-slate-400 rounded-md">
                        <FaPhoneAlt className="text-5xl text-[#89D8E3] mb-2" />
                        <p className="text-xl font-bold">Phone number</p>
                        <p>Hello@gmail.com</p>
                    </div>
                    <div className="p-5 w-[250px] h-[250px] flex flex-col justify-center items-center bg-slate-400 rounded-md">
                        <FaFax className="text-5xl text-[#89D8E3]
                        mb-2" />
                        <p className="text-xl font-bold">Fax</p>
                        <p>Hello@gmail.com</p>
                    </div>
                    <div className="p-5 w-[250px] h-[250px] flex flex-col justify-center items-center bg-slate-400 rounded-md">
                        <MdEmail className="text-5xl text-[#89D8E3] mb-2"/>
                        <p className="text-xl font-bold">Email</p>
                        <p>Hello@gmail.com</p>
                    </div>

                </div>

                <div className="p-7 rounded-lg flex flex-col gap-2 w-full lg:w-1/2 bg-[#89D8E3]">
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
                    <textarea name="messege" id="" cols="30" rows="10"></textarea>
                    <button className="inline-block border border-white text-white py-2 px-4 rounded hover:bg-white hover:text-black transition duration-300 ease-in-out">
                        SUBMIT
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Contact;