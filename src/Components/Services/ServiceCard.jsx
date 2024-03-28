/* eslint-disable react/prop-types */


const ServiceCard = ({ item }) => {
    return (
        <div data-aos="fade-up"
        data-aos-duration="1000" className="mb-16 p-10 md:p-5">
            <div className=" rounded-xl flex flex-col justify-end h-[500px]  bg-base-100 shadow-xl">
                <img className="rounded-t-lg w-full h-[300px]" src={item?.image?.url} alt="Shoes" />
                <div className="card-body ">
                    <h2 className="card-title">{item?.name}</h2>
                    <p className="mb-5">{item?.desc}</p>
                    <h2 className="card-title">{item?.charge}</h2>
                   
                </div>
            </div>

        </div>
    );
};

export default ServiceCard;