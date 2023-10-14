import PropTypes from 'prop-types';

const ServiceCard = ({service}) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className='max-h-48'><img src={service.image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Details</button>
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