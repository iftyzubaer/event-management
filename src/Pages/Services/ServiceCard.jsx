import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className='max-h-48'><img src={service.image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{service.title}</h2>
                    <p>{service.short_description}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/services/${service.id}`}><button className="btn btn-primary">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.object.isRequired,
}

export default ServiceCard;