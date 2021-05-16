import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="footer">
        <Container>
            <Row>
                <Col>
                    <h4>Patrycja Krześlak</h4>
                    <p>Numer albumu: 99718</p>
                </Col>
                <Col></Col>
            </Row>
        </Container>
        </div>
    )
}

export default Footer;