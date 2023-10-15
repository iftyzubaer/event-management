import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Service = () => {

    const [service, setService] = useState({})
    const { id } = useParams()
    const services = useLoaderData()

    useEffect(() => {
        const findService = services.find(service => service.id == id)
        setService(findService)
    }, [id, services])

    return (
        <div className="mx-40 ">
            <img src={service.image} alt="" />
            <p className="font-semibold pt-4 text-lg">Price: {service.price}</p>
            <h2 className="text-4xl font-bold py-6">{service.title}</h2>
            <p className="pb-6">{service.description}</p>
            <div className="mb-6 text-center">
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Purchase Now</button>
            </div>
        </div>
    );
};

export default Service;