import React, { useContext } from 'react'
import MovieContext from "../context/MovieContext";
import { useHistory } from 'react-router-dom';
import { Modal, Form, Col, Button, Jumbotron } from 'react-bootstrap'

const Dashboard = () => {
    const { users, setUsers } = useContext(MovieContext);
    let history = useHistory();
    
    const closeForm = () => {
        history.push('/');
    }

    return (
        <div>
            <Jumbotron>
                <Modal.Dialog>
                    <Modal.Header closeButton onClick={closeForm}>
                        <Modal.Title>Welcome {users.firstName} !!!</Modal.Title>
                    </Modal.Header>

                <Modal.Body>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" name="firstName" id="firstName" readOnly value={users.firstName} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" name="lastName" id="lastName" readOnly value={users.lastName} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" id="email" readOnly value={users.email} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" id="password" readOnly value={users.password} />
                    </Form.Group>
                    </Form.Row>
                    <Button variant="primary" type="submit" size="lg" block onClick={closeForm}>
                        Close
                    </Button>
                </Form>
                </Modal.Body>
                </Modal.Dialog>
            </Jumbotron>
        </div>
    )
}

export default Dashboard
