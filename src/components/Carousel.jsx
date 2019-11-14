import React from 'react';
import CarouselItem from './CarouselItem'

var carouselItemProps = [
    {
        status: 'active',
        name: '',
        description: '',
        img: {},
    },
    {
        status: '',
        name: '',
        description: '',
        img: {},
    },
    {
        status: '',
        name: '',
        description: '',
        img: {},
    }
]

function Carousel() {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                
                {carouselItemProps.map((carouselItem, index) =>
                    <CarouselItem name={carouselItem.name}
                        description={carouselItem.description}
                        img={carouselItem.img} />                   
                )}

                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

export default Carousel;