import Button from "../UI/Button/Button";
import Modal from "react-bootstrap/Modal";
const ConfirmModal = ({show, handleClose, props}) => {
  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
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
