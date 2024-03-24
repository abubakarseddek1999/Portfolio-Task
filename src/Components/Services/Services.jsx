import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [serviceData, setServiceData] = useState(null);

    useEffect(() => {
        fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
            .then(res => res.json())
            .then(data => setServiceData(data?.user?.services))
    }, [])
    return (
        <div id="service">
            <h2 className="text-3xl md:text-3xl font-bold text-center">My Services</h2>
            <p className="text-center italic text-xl">Services Offered</p>

           {/* skills */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {serviceData?.map(item =>
                   <ServiceCard key={item.i} item={item}></ServiceCard>
                )}
            </div>

        </div>
    );
};

export default Services;