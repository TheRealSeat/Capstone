import './Product.scss';
import Navbar from "../../Components/Navbar/Navbar";
import Hero from '../../Components/Hero/Hero';


function Product() {
  
  return (
    <div className="Product">
      <header className="Product-header">
        <Navbar />
        <h1 className='header-container'>
          <div className="orange-large">TheRealSeat</div><div className="white-large">&nbsp;Capstone Project</div>
        </h1> 
        <h2>This product page can become the demo page for the main events page where you can browse events and add to cart</h2>
      </header>
      <Hero /> 
    </div>
  );
}

export default Product;
