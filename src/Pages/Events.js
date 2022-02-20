import React, { useState } from "react";
import Button from "../Components/UI/Button/Button";
import logo from "../Assets/Images/logo.svg";
import fans from "../Assets/Images/fans_cheering.jpeg";
import ConfirmModal from "../Components/ConfirmModal/ConfirmModal";
import EventCatalog from "../Components/EventCatalog/EventCatalog";
// import Navbar from "../Components/Navbar";
function Events() {
  const events = [
    {
      img: logo,
      title: "Superb Owl",
      location: "Yum Center",
      pricesFrom: 99,
    },
    {
      img: fans,
      title: "Event",
      location: "Place",
      pricesFrom: 49,
    },
    {
      img: logo,
      title: "Superb Owl",
      location: "Yum Center",
      pricesFrom: 99,
    },
    {
      img: fans,
      title: "Event",
      location: "Place",
      pricesFrom: 49,
    },
  ];

  const [showModal, setModalState] = useState(false);
  const [modalProps, setModalProps] = useState({header_value: "Test Header", body_value: "Test Body"});
  const handleShowModal = () => {
    setModalState(true);
    handleModalPropChange({header_value: "Test Header Changed", body_value: "Test Body Changed"})
  }
  const handleHideModal = (confirmed) => {
    console.log(confirmed)
    setModalState(false);
  }
  const handleModalPropChange = (value) => {
    setModalProps(value);
  }

  return (
    <div>
      {/* Uncomment navbar when page is styled, currently overlapping things */}
      {/* <Navbar /> */}
      <ConfirmModal show={showModal} handleClose={handleHideModal} props={modalProps} />
      <div>Hello World</div>
      <Button onClick={handleShowModal}>Open Modal</Button>
      <EventCatalog events = {events} eventCategory = "Sports" ></EventCatalog>
      <EventCatalog events = {events} eventCategory = "Concerts" ></EventCatalog>      
    </div>
  );
}

export default Events;
