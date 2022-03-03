import Button from "../UI/Button/Button";
import Modal from "react-bootstrap/Modal";
import "./ConfirmModal.scss";
const ConfirmModal = ({show, handleClose, props}) => {
  return (
    <>
      <Modal show={show}  dialogClassName="modal-content-style" onHide={handleClose} backdrop="static" keyboard={false} centered>
        <Modal.Header closeButton>
          <h3>{props.event_title}</h3>
        </Modal.Header>
        <Modal.Body>
          <p>Location: {props.event_location}</p>
          <p>Prices start from: ${props.event_pricesFrom}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleClose(false)}>
            Cancel
          </Button>
          <Button onClick={() => handleClose(true, props)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConfirmModal;
