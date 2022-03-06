import Button from "../UI/Button/Button";
import Modal from "react-bootstrap/Modal";
import "../ConfirmModal/ConfirmModal.scss";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../Services/Slices/cart";

const CartModal = ({ show, handleClose }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <Modal
        show={show}
        dialogClassName="modal-content-style"
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <span>Cart</span>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {cart.cartEvents?.map((product, index) => (
              <li key={index} onClick={() => dispatch(removeFromCart(index))}>
                {product.event_title}, {product.event_pricesFrom}
              </li>
            ))}
          </ul>
          <p>Total: ${cart.cartTotalAmount}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleClose(false)}>Cancel</Button>
          <Button onClick={() => handleClose(true)}>Confirm</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CartModal;
