import React, { useState } from "react";
import Button from "../Components/UI/Button/Button";
import ConfirmModal from "../Components/ConfirmModal/ConfirmModal";
import ProductTable from "../Components/ProductTable/ProductTable";
import { catalogs } from "../Data/catalogsData";

// import Navbar from "../Components/Navbar";
function Events() {



  const [showModal, setModalState] = useState(false);
  const [modalProps, setModalProps] = useState({ header_value: "Test Header", body_value: "Test Body" });
  const handleShowModal = () => {
    setModalState(true);
  }
  const handleHideModal = (confirmed) => {
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
      <ConfirmModal
        show={showModal}
        handleClose={handleHideModal}
        props={modalProps}
      />
      <div>Hello World</div>
      <Button onClick={handleShowModal}>Open Modal</Button>
      <ProductTable catalog={catalogs}></ProductTable>
      <EventCatalog events={events} eventCategory="Sports" handleClick={handleModalPropChange} ></EventCatalog>
      <EventCatalog events={events} eventCategory="Concerts" handleClick={handleModalPropChange} ></EventCatalog>
    </div>
  );
}

export default Events;
