import Carousel from 'react-bootstrap/Carousel'
import EventCard from '../EventCard/EventCard';
import './Hero.scss'

function Hero() {
    return (
    <div className="Hero">
        <Carousel class='carousel'>
        <Carousel.Item class='carousel-item'>
            <EventCard
            class="carousel-card"
            img="https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?cs=srgb&dl=pexels-pixabay-207691.jpg&fm=jpg"
            title="Welcome to TheRealCapstone"
            location="J.B. Speed School"
            pricesFrom="0"
            key="0"
            handleClick='0'
            ></EventCard>
            <Carousel.Caption>
            <h3>Welcome to TheRealCapstone</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <EventCard
            class="carousel-card"
            img="https://images.pexels.com/photos/11032963/pexels-photo-11032963.jpeg?cs=srgb&dl=pexels-josh-hild-11032963.jpg&fm=jpg"
            title="Louisville Concerts"
            location="Louisville"
            pricesFrom="70"
            key="1"
            handleClick='0'
            ></EventCard>
            <Carousel.Caption>
            <h3>Louisville Concerts</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <EventCard
            class="carousel-card"
            img="https://images.pexels.com/photos/3722923/pexels-photo-3722923.jpeg?cs=srgb&dl=pexels-chait-goli-3722923.jpg&fm=jpg"
            title="Nashville Concerts"
            location="Nashville"
            pricesFrom="200"
            key="0"
            handleClick='0'
            ></EventCard>
            <Carousel.Caption>
            <h3>Nashville Concerts</h3>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </div>
    )
}

export default Hero;