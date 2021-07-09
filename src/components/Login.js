import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Form, Button} from 'react-bootstrap'

const Login = () => {
    return (
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Sign In to DMmat</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <Form>
                <Form.Group controlId="formGridEmail">
                    <Form.Control type = "email" placeholder="Email" />
                </Form.Group>

                <Form.Group controlId="formGridPassword">
                    <Form.Control type = "password" placeholder="Password" />
                    <Button variant="link">Forgot Your Password?</Button>
                </Form.Group>
                
                <Button variant="primary" type="submit" size="lg" block>
                    Sign In
                </Button>
                <Button variant="outline-primary" type="submit" size="lg" block>
                    Create a new DMmat Account
                </Button>
            </Form>
            </Modal.Body>
            <Modal.Footer>
                <Modal.Title>Or Sign In With</Modal.Title>
                <Button variant="info" size="bg">Google Account</Button>
                <Button variant="dark" size="bg">Facebook</Button>
            </Modal.Footer>
        </Modal.Dialog>
    )
}

export default Login
