import React, { useState } from "react";
import "./Events.scss";
import { Button } from "react-bootstrap";
import ConfirmModal from "../../Components/ConfirmModal/ConfirmModal";
import ProductTable from "../../Components/ProductTable/ProductTable";
import { catalogs } from "../../Data/catalogsData";
import Cart from "../../Components/CartModal/CartModal";
import Hero from "../../Components/Hero/Hero";
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../Services/Slices/cart'
import LoadingComponent from '../../Components/Loading/LoadingComponent'
function Events() {

  const [showCart, setCartState] = useState(false);

  const [showModal, setModalState] = useState(false);
  const [modalProps, setModalProps] = useState({ header_value: "Test Header", body_value: "Test Body" });
  const [loading,setLoading] = useState(false);
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const handleShowCart = () => {
    setCartState(true);
  }
  const handleCloseCart = () => {
    setCartState(false);
  }
  const handleHideModal = (confirmed, product) => {
    if (confirmed) {
      dispatch(addToCart(product));
    }
    setModalState(false);
  };
  const handleModalPropChange = (value) => {
    setModalState(true);
    setModalProps(value);
  };
  if(loading) return <LoadingComponent/>
  return (
    <div className = "EventPage">
      
      <Cart
        show={showCart}
        handleClose={handleCloseCart}
      />
      <ConfirmModal
        show={showModal}
        handleClose={handleHideModal}
        props={modalProps}
      />


      <Button variant="secondary" size="lg" onClick={handleShowCart}>View Cart ({cart.cartEvents.length})</Button>

      <Hero />
      <ProductTable catalog={catalogs} handleClick={handleModalPropChange}></ProductTable>
    </div>
  );
}

export default Events;
