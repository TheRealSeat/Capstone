import stadium from './Images/hero_main.jpeg';
import './Background.css';
function Background() {
    return (
        <div className='Background'>
            <img src={stadium} alt="fans" width="100%" height="auto" class='landing-image'/>
        </div>
    );
}

export default Background;