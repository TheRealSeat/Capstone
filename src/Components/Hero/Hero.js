import Carousel from 'react-bootstrap/Carousel'
import './Hero.scss'

function Hero() {
    return (
    <div className="Hero">
        <Carousel className='carousel'>
        <Carousel.Item className='carousel-item'>          
            <img className="hero-img" alt="" src='https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?cs=srgb&dl=pexels-pixabay-207691.jpg&fm=jpg' />
            <Carousel.Caption>
            <h3>Welcome to TheRealCapstone</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel-item'>       
            <img className="hero-img" alt="" src="https://images.pexels.com/photos/11032963/pexels-photo-11032963.jpeg?cs=srgb&dl=pexels-josh-hild-11032963.jpg&fm=jpg"/>            
            <Carousel.Caption>
            <h3>Louisville Concerts</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel-item'>      
            <img className="hero-img" alt="" src="https://images.pexels.com/photos/3722923/pexels-photo-3722923.jpeg?cs=srgb&dl=pexels-chait-goli-3722923.jpg&fm=jpg"/>           
            <Carousel.Caption>
            <h3>Nashville Concerts</h3>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </div>
    )
}

export default Hero;