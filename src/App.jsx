import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [show, setShow] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const productPrice = 450;
    const freeShippingThreshold = 1500;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const increaseQuantity = () => setQuantity(prev => prev + 1);
    const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

    const totalPrice = productPrice * quantity;
    const remainingAmount = freeShippingThreshold - totalPrice;
    const progressBarWidth = (totalPrice / freeShippingThreshold) * 100;

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch modal
            </Button>

            <Modal size='lg' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-center w-100">Vložili jste do košíku</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col xs={2} md={2}>
                                <img src="./assets/product.png" alt="product" width={100} height={100} />
                            </Col>
                            <Col xs={6} md={6}>
                                <Row>
                                    Mycí olej pro ženy Hy-intima, 30 ml Mycí olej pro ženy Hy-intima
                                </Row>
                                <Row className="text-success">
                                    Skladem
                                </Row>
                            </Col>
                            <Col xs={4} md={4} className="text-right">
                                <Row>
                                    <Col className="text-right">{totalPrice} Kč</Col>
                                </Row>
                                <Row className="text-muted">
                                    <Col className="text-right">1 306 Kč</Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="my-3">
                            <Col className="d-flex justify-content-between align-items-center">
                                <Button variant="light" onClick={decreaseQuantity}>-</Button>
                                <input type="text" value={quantity} readOnly style={{ width: '50px', textAlign: 'center' }} />
                                <Button variant="light" onClick={increaseQuantity}>+</Button>
                            </Col>
                        </Row>
                        <Row className="my-3">
                            <Col>
                                <ProgressBar now={progressBarWidth} />
                                <p className="mt-2">DOPRAVA ZDARMA<br />Nakupte ještě za <span>{remainingAmount} Kč</span> a dopravu platíme my</p>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer className="justify-content-between">
                    <Button variant="secondary" onClick={handleClose}>
                        Pokračovat v nákupu
                    </Button>
                    <Button variant="warning" onClick={handleClose}>
                        Přejít do košíku {'>'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default App;
