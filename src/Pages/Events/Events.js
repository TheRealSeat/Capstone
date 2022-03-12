import React, { useState } from "react";
import "./Events.scss";
import ConfirmModal from "../../Components/ConfirmModal/ConfirmModal";
import ProductTable from "../../Components/ProductTable/ProductTable";
import { catalogs } from "../../Data/catalogsData";
import Hero from "../../Components/Hero/Hero";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Services/Slices/cart";
function Events() {

  const [showModal, setModalState] = useState(false);
  const [modalProps, setModalProps] = useState({
    header_value: "Test Header",
    body_value: "Test Body",
  });
  const dispatch = useDispatch();


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
  return (
    <div className="EventPage">
      <ConfirmModal
        show={showModal}
        handleClose={handleHideModal}
        props={modalProps}
      />

      <Hero />
      <ProductTable
        catalog={catalogs}
        handleClick={handleModalPropChange}
      ></ProductTable>
    </div>
  );
}

export default Events;
