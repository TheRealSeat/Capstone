import { useState, useEffect } from "react";
import React from "react";
import ModalService from "../../../Services/ModalService";

const ModalRoot = () => {
  const [modal, setModal] = useState({});

  useEffect(() => {
    ModalService.on("open", ({ component, props }) => {
      setModal({
        component,
        props,
        close: (value) => {
          setModal({});
        },
      });
    });
  }, []);

  const ModalComponent = modal.component ? modal.component : null;

  return (
    <section>
      {ModalComponent && (
        <ModalComponent {...modal.props} close={modal.close} />
      )}
    </section>
  );
};

export default ModalRoot;
