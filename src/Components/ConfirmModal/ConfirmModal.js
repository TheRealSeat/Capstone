import Modal from "react-bootstrap/Modal";
import "./ConfirmModal.scss";
import { Button, Divider, Image,Icon } from 'semantic-ui-react';
import { Col, Container, Row } from "react-bootstrap";
import {Typography} from "@mui/material";
const ConfirmModal = ({show, handleClose, props}) => {
  return (
    <>
      <Modal
        show={show}
        dialogClassName="modal-content-style"
        onHide={handleClose}
        keyboard={false}
        centered
        size="sm"
      >
        <Modal.Header closeButton>
          <h3>View Event - {props.catalog}</h3>
        </Modal.Header>
        <Modal.Body>
        <Container>
          <Row>
            <Col xs={10} md={6}>
             <Image src={props.image}/>
            </Col>
            <Col xs={8} md={6} style={{textAlign:'center',color:'#bac3d6'}}>
              <Row >
              <Typography variant="h3">{props.event_title}</Typography>
              </Row>
              <Row>
                <Divider/>
              </Row>
              <Row>
              <Typography variant="h5">Location : {props.event_location}</Typography>
              </Row>
              <Row>
                <Divider/>
              </Row>

              <Row>
              <Typography variant="h5">Price : ${props.event_pricesFrom}</Typography>
              </Row>
            </Col>
          </Row>

         
        </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button color="grey" onClick={() => handleClose(true, props)}><Icon name="shopping cart" size="small"/>Add to cart</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConfirmModal;
