import Button from "../UI/Button/Button";
import Modal from "react-bootstrap/Modal";
import "./ConfirmModal.scss";
const ConfirmModal = ({show, handleClose, props}) => {
  return (
    <>
      <Modal show={show} fullscreen={true} dialogClassName="modal-content-style" onHide={handleClose} backdrop="static" keyboard={false} centered>
        <Modal.Header closeButton>
          <h3>{props.header_value}</h3>
        </Modal.Header>
        <Modal.Body>
          <p>{props.body_value}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleClose(false)}>
            Cancel
          </Button>
          <Button onClick={() => handleClose(true)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConfirmModal;
