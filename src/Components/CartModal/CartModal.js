import Button from "../UI/Button/Button";
import Modal from "react-bootstrap/Modal";
import "../ConfirmModal/ConfirmModal.scss"
const CartModal = ({ show, handleRemove, handleClose, props }) => {
  let propTotal = 0;
  for (let i = 0; i < props.length; i++) {
    propTotal += props[i].event_pricesFrom;
  }
  return (
    <>
      <Modal show={show} dialogClassName="modal-content-style" onHide={handleClose} backdrop="static" keyboard={false} centered>
        <Modal.Header closeButton>
          <span>Cart</span>
        </Modal.Header>
        <Modal.Body>
          <ul>{props.map((product, index) => <li key={index} onClick={() => handleRemove(product)}>{product.event_title}, {product.event_pricesFrom}</li>)}</ul>
          <p>Total: ${propTotal}</p>
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

export default CartModal;
