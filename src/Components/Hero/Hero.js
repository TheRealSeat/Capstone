import heroimg from '../../Assets/Images/hero_main.jpeg';
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
            img={heroimg}
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
            img={heroimg}
            title="Example Recommended Events"
            location="Louisville"
            pricesFrom="70"
            key="1"
            handleClick='0'
            ></EventCard>
            <Carousel.Caption>
            <h3>Example of Where we will display recommended events</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <EventCard
            class="carousel-card"
            img={heroimg}
            title="Example Recommended Events"
            location="Nashville"
            pricesFrom="200"
            key="0"
            handleClick='0'
            ></EventCard>
            <Carousel.Caption>
            <h3>Example of Where we will display recommended events</h3>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </div>
    )
}

export default Hero;