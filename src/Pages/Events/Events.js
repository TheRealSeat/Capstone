import React, { useState } from "react";
import Button from "../../Components/UI/Button/Button";
import ConfirmModal from "../../Components/ConfirmModal/ConfirmModal";
import ProductTable from "../../Components/ProductTable/ProductTable";
import EventCatalog from "../../Components/EventCatalog/EventCatalog";
import { events } from "../../Data/catalogsData";
import { catalogs } from "../../Data/catalogsData";
import Cart from "../../Components/CartModal/CartModal";
import Hero from "../../Components/Hero/Hero";
// import Navbar from "../../Components/Navbar";
function Events() {

  const [cart, setCart] = useState([]);
  const [showCart, setCartState] = useState(false);

  const [showModal, setModalState] = useState(false);
  const [modalProps, setModalProps] = useState({ header_value: "Test Header", body_value: "Test Body" });

  const addToCart = (product) => {
    setCart([...cart, { ...product }]);
  };
  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  }; 

  const handleShowCart = () => {
    setCartState(true);
  }
  const handleCloseCart = () => {
    setCartState(false);
  }
  const handleHideModal = (confirmed, product) => {
    if (confirmed) {
      addToCart(product);
    }
    console.log(confirmed);
    setModalState(false);
  };
  const handleModalPropChange = (value) => {
    setModalState(true);
    setModalProps(value);
  };

  return (
    <div>
      {/* Uncomment navbar when page is styled, currently overlapping things */}
      {/* <Navbar /> */}
      <Cart
        show={showCart}
        handleRemove={removeFromCart}
        handleClose={handleCloseCart}
        props={cart}
      />
      <ConfirmModal
        show={showModal}
        handleClose={handleHideModal}
        props={modalProps}
      />
      <div>Hello World</div>
      <div>Cart({cart.length})</div>

      <Button onClick={handleShowCart}>Open Modal</Button>
      <Hero />
      <EventCatalog events={events} catalogName="Arts & Theater" handleClick={handleModalPropChange} ></EventCatalog>
      <ProductTable catalog={catalogs} handleClick={handleModalPropChange}></ProductTable>
    </div>
  );
}

export default Events;
