import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Form, Col, Button} from 'react-bootstrap'

const Registration = () => {
    return (
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Create a New Account</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>
                </Form.Row>
                    <Form.Group controlId="formGridEmail">
                        <Form.Control type = "email" placeholder="Email" />
                    </Form.Group>

                <Form.Group controlId="formGridPassword">
                    <Form.Control type = "password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formGridCertify">
                    <Form.Check label="I certify that I am at least 18 years old and that I agree to the Terms and Policies and Privacy Policy. This service is for the US only." />
                </Form.Group>
                <Button variant="primary" type="submit" size="lg" block>
                    Sign Up
                </Button>
            </Form>
            </Modal.Body>
            <Modal.Footer>
                <Modal.Title>Or Sign Up With</Modal.Title>
                <Button variant="info">Google Account</Button>
                <Button variant="dark">Facebook</Button>
            </Modal.Footer>
        </Modal.Dialog>
    )
}

export default Registration
