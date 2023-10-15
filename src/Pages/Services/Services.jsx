import PropTypes from 'prop-types';
import ServiceCard from "./ServiceCard";

const Services = ({services}) => {
    return (
        <div className="px-2 lg:px-14 py-6">
            <h2 className="text-5xl font-bold text-center mb-4">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

Services.propTypes = {
    services: PropTypes.array.isRequired,
}

export default Services;