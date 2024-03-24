/* eslint-disable react/prop-types */


const Testimonial = ({ item }) => {
    return (
        <div className="flex flex-col justify-between gap-10 p-5 bg-slate-400 h-[900px] rounded-md m-2">
            <div className="mb-16">
                <img className="w-16 h-16 rounded-lg" src={item?.image?.url} alt="" />
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