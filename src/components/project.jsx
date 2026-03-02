import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Row, Col } from 'react-bootstrap';
import './project.css';
import '../index.css';
import { faGithub, faSafari } from '@fortawesome/free-brands-svg-icons';

function Project(props) {
    return (
        <Card className="projectCard p-0">
            <Row className="g-0 w-100 flex-grow-1">
                <Col md={4} className="imageContainer">
                    <Card.Img
                        className="cardImage h-100"
                        src={props.imageUrl}
                        alt={props.name}
                    />
                </Col>
                <Col md={8} className="d-flex flex-column justify-content-center">
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>{props.description}</Card.Text>
                        <Card.Text>
                            {props.showUrl ? <FontAwesomeIcon icon={faSafari} onClick={() => window.open(props.url)} size="xl" style={{ cursor: 'pointer', marginRight: "0.5em" }} /> : null}
                            <FontAwesomeIcon icon={faGithub} onClick={() => window.open(props.github)} size="xl" style={{ cursor: 'pointer' }} />
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}

export default Project;