import React from 'react';
import PropTypes from 'prop-types';


function CarouselItem(props) {
    var status = props.status + ' carousel-item';
    return (
        <div className={status}>
            <h2>{props.name}</h2>
            <img className='d-block w-100' src={props.img} alt="First slide" />
            <p>{props.description}</p>
        </div>
        
    )
}

CarouselItem.propTypes = {
    status: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string
};

export default CarouselItem;