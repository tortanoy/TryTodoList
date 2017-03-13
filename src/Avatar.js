import React, {Component} from 'react';
import {Row, Col, Image} from 'react-bootstrap';

class Avatar extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={10}></Col>
                    <Col xs={2}>
                        <Image src="https://images.unsplash.com/photo-1455525928928-837c99714248?dpr=1&auto=format&fit=crop&w=150&h=150&q=80&cs=tinysrgb&crop=" thumbnail circle />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Avatar;