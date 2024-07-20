import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import product from './assets/product.png'


const App = () => {
    const [show, setShow] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const productPrice = 450;
    const originalPrice = 1306;
    const freeShippingThreshold = 1500;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const increaseQuantity = () => setQuantity(prev => prev + 1);
    const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

    const totalPrice = productPrice * quantity;
    const originalTotalPrice = originalPrice * quantity;
    const remainingAmount = freeShippingThreshold - totalPrice;
    const progressBarWidth = (totalPrice / freeShippingThreshold) * 100;

    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <Button variant="primary" onClick={handleShow}>
                    Launch modal
                </Button>
            </div>
            <Modal size='lg' show={show} onHide={handleClose}>
                <Modal.Header closeButton className='p-4'>
                    <Modal.Title className='text-center w-100 fw-bold'>Vložili jste do košíku</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col xs={2} sm={2} md={2}>
                                <img src={product} alt="product" width={75} height={75} />
                            </Col>
                            <Col xs={7} sm={7} md={6}>
                                <Row>
                                    <span className="fw-bold">
                                        Mycí olej pro ženy Hy-intima, 30 ml Mycí olej pro ženy Hy-intima
                                    </span>
                                </Row>
                                <Row>
                                    <span className="text-success fw-bold pt-3">
                                        <span className='pe-2'>
                                            <i class="bi bi-circle-fill" style={{
                                                fontSize: '10px',
                                            }} />
                                        </span>
                                        Skladem
                                    </span>
                                </Row>
                            </Col>
                            <Col xs={3} sm={3} md={4} className="text-end">
                                <Row>
                                    <Col><span className="fw-bold">{totalPrice} Kč</span></Col>
                                </Row>
                                <Row className="text-muted">
                                    <Col><span className="text-decoration-line-through">{originalTotalPrice} Kč</span></Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="my-4">
                            <Col className="d-flex justify-content-between align-items-center">
                                <Button variant="light" onClick={decreaseQuantity}>-</Button>
                                <input type="text" value={quantity} readOnly style={{ width: '50px', textAlign: 'center' }} />
                                <Button variant="light" onClick={increaseQuantity}>+</Button>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer className="justify-content-between mb-3">
                    <Container>
                        <Row className="mt-3 pt-4 position-relative">
                            <Col xs={12} md={8} lg={9}>
                                <div className='pt-1' style={{ position: 'relative', height: '30px' }}>
                                    <ProgressBar now={progressBarWidth} className='border border-secondary' variant='success' style={{ height: '15px' }} />
                                    <i
                                        className="bi bi-truck text-success"
                                        style={{
                                            position: 'absolute',
                                            top: '-45px',
                                            left: `calc(${Math.min(progressBarWidth, 100)}% - 2%)`,
                                            transform: 'translateX(-50%)',
                                            fontSize: '36px',
                                            transition: 'left 0.5s ease'
                                        }}
                                    />
                                </div>
                            </Col>
                            <Col xs={12} md={4} lg={3} className="text-end fw-bold">
                                {totalPrice} / <span className="text-success"> {freeShippingThreshold} Kč </span>
                            </Col>
                        </Row>
                        <Row>
                            <p className="mt-2"><span className='fw-bold'>DOPRAVA ZDARMA</span>
                                <br />{totalPrice < freeShippingThreshold ? (<>Nakupte ještě za <span className="text-success fw-bold">{remainingAmount} Kč</span> a dopravu platíme my</>) : (<span>Dopravu platíme my</span>)}
                            </p>
                        </Row>
                    </Container>
                    <Button variant="link" onClick={handleClose} className="text-success fw-bold">
                        Pokračovat v nákupu
                    </Button>
                    <Button variant="warning" onClick={handleClose} className='px-5 py-2 fw-bold'>
                        Přejít do košíku
                        <span className='ps-2'><i class="bi bi-chevron-right" /></span>
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}

export default App;
