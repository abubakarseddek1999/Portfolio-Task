/* eslint-disable react/prop-types */


const Testimonial = ({ item }) => {
    return (
        <div className="flex flex-col justify-between p-5 h-[800px] m-2 ">
            <div className="">
                <img className="w-10 md:w-16 h-10 md:h-16 rounded-2xl" src={item?.image?.url} alt="" />
            </div>
            <div>
                <p>1{item?.review}</p>
            </div>
            <div>
                <p className="text-xl font-bold">{item?.name}</p>
                <p>{item?.position}</p>
            </div>

        </div>
    );
};

export default Testimonial;