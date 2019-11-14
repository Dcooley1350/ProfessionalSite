import React from 'react';
import PropTypes from 'prop-types';


function CarouselItem(props) {

    return (
        <React.Fragment>
            <div className='carousel-item ${props.status}'>
                <h2>{props.name}</h2>
                <img className="d-block w-100" src={props.img} alt="First slide" />
                <p>{props.description}</p>
            </div>







        </React.Fragment>
    )
}

CarouselItem.propTypes = {
    status: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    dsecription: PropTypes.string.isRequired,
    img: PropTypes.element
};

export default CarouselItem;