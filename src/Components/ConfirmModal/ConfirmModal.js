import React from "react";
import Modal from "../UI/Modal/Modal";
import ModalHeader from "../UI/Modal/ModalHeader";
import ModalBody from "../UI/Modal/ModalBody";
import ModalFooter from "../UI/Modal/ModalFooter";
import Button from "../UI/Button/Button";
const ConfirmModal = ({ close }) => {
  return (
    <div>
      <Modal>
        <ModalHeader>
          <h3>Confirmation Modal!</h3>
        </ModalHeader>
        <ModalBody>
          <p>Please Confirm</p>
        </ModalBody>
        <ModalFooter>
          <Button onClick={close}>
            Confirm
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ConfirmModal;
