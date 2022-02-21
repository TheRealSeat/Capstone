import React, { useState } from "react";
import Button from "../Components/UI/Button/Button";
import ConfirmModal from "../Components/ConfirmModal/ConfirmModal";
import ProductTable from "../Components/ProductTable/ProductTable";
import { catalogs } from "../Data/catalogsData";

// import Navbar from "../Components/Navbar";
function Events() {



  const [showModal, setModalState] = useState(false);
  const [modalProps, setModalProps] = useState({
    header_value: "Test Header",
    body_value: "Test Body",
  });
  const handleShowModal = () => {
    setModalState(true);
    handleModalPropChange({
      header_value: "Test Header Changed",
      body_value: "Test Body Changed",
    });
  };
  const handleHideModal = (confirmed) => {
    console.log(confirmed);
    setModalState(false);
  };
  const handleModalPropChange = (value) => {
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
    </div>
  );
}

export default Events;
