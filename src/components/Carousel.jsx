import React from 'react';
import CarouselItem from './CarouselItem'
import Pokemon from '../img/pokemonImage.jpg'
import Warfare from '../img/warfareImage.jpg'
import Soldier from '../img/soldierImage.jpg'

var carouselItemProps = [
    {
        status: 'active',
        name: 'AWESOME WEBSITE',
        description: 'Lorem mored ptordedda thel ;tl lsjht inthljn isnt thisdnnt devin thisn dude poo jeff table jason',
        img: Pokemon
    },
    {
        status: '',
        name: 'EVEN COOLER WEBSITE',
        description: 'Lorem mored ptordedda thel ;tl lsjht inthljn isnt thisdnnt devin thisn dude poo jeff table jason',
        img: Warfare
    },
    {
        status: '',
        name: 'WOWZER THIS IS NEAT WEBSITE',
        description: 'Lorem mored ptordedda thel ;tl lsjht inthljn isnt thisdnnt devin thisn dude poo jeff table jason',
        img: Soldier
    }
]

function Carousel() {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                {carouselItemProps.map((carouselItem, index) =>
                    <CarouselItem name={carouselItem.name}
                        status={carouselItem.status}
                        description={carouselItem.description}
                        img={carouselItem.img}
                        key={index} />
                )}
            </div>

            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>

        </div>
    );
}

export default Carousel;