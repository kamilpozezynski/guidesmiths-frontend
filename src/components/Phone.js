import React, {useState} from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import CardImg from "react-bootstrap/CardImg";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  console.log(props);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        {props.phone.manufacturer} - {props.phone.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col lg={6} sm={12} className="m-auto">
              <ul>
                <li>Color: {props.phone.color}</li>
                <li>Screen: {props.phone.screen}</li>
                <li>Processor: {props.phone.processor}</li>
                <li>Ram: {props.phone.ram}</li>
            </ul>
          </Col>
          <Col lg={6} sm={12} className="text-center">
            <img className="imgPopUp" src={process.env.PUBLIC_URL + "/phones/" + props.phone.imageFileName} alt={props.phone.name}></img>
          </Col>
        </Row>
        </Container>
        <p>
          {props.phone.description}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Phone(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Col lg={3} md={4} sm={6} xs={12}>
      <Card style={{ height: "25rem" }} className="mt-5">
        <Card.Img
          className="imagen-responsive"
          variant="top"
          src={process.env.PUBLIC_URL + "/phones/" + props.phone.imageFileName}
        />
        <Card.Body>
          <Card.Title className="text-center">{props.phone.name} - {props.phone.price}$</Card.Title>
          <Card.Text className="p-2">{props.phone.description}</Card.Text>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Read more...
          </Button>
        </Card.Body>
      </Card>
      <MyVerticallyCenteredModal
        show={modalShow}
        phone={props.phone}
        onHide={() => setModalShow(false)}
      />
    </Col>
  );
}
Card.Body = Card;
Card.Img = CardImg;
Card.Title = Card;


Phone.propTypes = {
  phone: PropTypes.object.isRequired
};

export default Phone;
