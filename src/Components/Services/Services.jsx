import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [serviceData, setServiceData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        setLoading(true);
        fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
            .then(res => res.json())
            .then(data => {
                setServiceData(data?.user?.services);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(true);
            });
    };

    return (
        <div id="service" className="mt-10">
            <h2 className="text-3xl md:text-3xl font-bold text-center">My Services</h2>
            <p className="text-center italic text-xl">Services Offered</p>

            {/* Reload Button */}
            {loading ? (
                <p className="text-center">Loading<span className="loading loading-spinner loading-lg"></span></p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {serviceData?.map(item =>
                        <ServiceCard key={item.id} item={item}></ServiceCard>
                    )}
                </div>
            )}

            {/* Skills */}


        </div>
    );
};

export default Services;
