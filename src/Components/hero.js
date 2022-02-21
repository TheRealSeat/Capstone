import heroimg from '../Assets/Images/hero_main.jpeg';
import Carousel from 'react-bootstrap/Carousel'
import './hero.css'

function Hero() {
    return (
    <div>
        <h2>This Carousel can be used to show featured events at the top of the landing / events page</h2>
        <Carousel>
        <Carousel.Item>
            <img src={heroimg} alt="heroimg" class="hero-img"/>
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src={heroimg} alt="heroimg" class="hero-img"/>
            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src={heroimg} alt="heroimg" class="hero-img"/>
            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </div>
    )
}

export default Hero;