import React, { useState,useEffect } from "react";
import "./Events.scss";
import ConfirmModal from "../../Components/ConfirmModal/ConfirmModal";
import ProductTable from "../../Components/ProductTable/ProductTable";
import Hero from "../../Components/Hero/Hero";
import { useDispatch,useSelector } from "react-redux";
import { addToCart } from "../../Services/Slices/cart";
import agent from "../../api/agent";
import {AddEvents} from '../../Services/Slices/event'
import LoadingComponent from '../../Components/Loading/LoadingComponent'
function Events() {

 
  const [showModal, setModalState] = useState(false);
  const [modalProps, setModalProps] = useState({
    header_value: "Test Header",
    body_value: "Test Body",
  });
  const dispatch = useDispatch();
  const [loading,setLoading]= useState(true);
  const  events = useSelector(state=>state.events.events)
  useEffect(()=>{

    agent.Event.list()
        .then(values => {
          console.log(values)
            dispatch(AddEvents(values));
        })
        .catch(error=>console.log(error))
        .finally(()=>setLoading(false))
},[dispatch]);

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
 
  if(loading || events.length===0) return <LoadingComponent/>
  return (
    <div className="EventPage">
      <ConfirmModal
        show={showModal}
        handleClose={handleHideModal}
        props={modalProps}
      />

      <Hero />
      <ProductTable
        catalog={events}
        handleClick={handleModalPropChange}
      ></ProductTable>
    </div>
  );
}

export default Events;
