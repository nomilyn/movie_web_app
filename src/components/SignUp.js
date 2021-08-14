import React from 'react'

import { Modal, Form, Col, Button } from 'react-bootstrap'
import MovieContext from "../context/MovieContext";
import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

const Registration = () => {
    const [users, setUsers] = useState({
        firstName: " ",
        lastName: " ",
        email: " ",
        password: " ",
    })
    //const {users, setUsers} = useContext(MovieContext);

    const submitForm = (event) => {
        event.preventDefault();
        fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => {
                alert(`You are registered successfully!!!`);
                history.push('/login');
                setUsers({
                    firstName: " ",
                    lastName: " ",
                    email: " ",
                    password: " ",
                });
            })
            .catch(err => console.log(`Error : ${err}`))
    }

    let history = useHistory();
    const closeForm = () => {
        history.push('/');
    }

    
    return (
        <Modal.Dialog>
            <Modal.Header closeButton onClick={closeForm}>
                <Modal.Title>Create a New Account</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form action="/" method="POST" onSubmit={submitForm}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" name="firstName" id="firstName" value={users.firstName} onChange={(event) => {
                                setUsers({
                                    ...users,
                                    firstName: event.target.value
                                })
                            }} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" name="lastName" id="lastName" value={users.lastName} onChange={(event) => {
                                setUsers({
                                    ...users,
                                    lastName: event.target.value
                                })
                            }} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" id="email" value={users.username} onChange={(event) => {
                            setUsers({
                                ...users,
                                email: event.target.value
                            })
                        }} />
                    </Form.Group>

                    <Form.Group controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" id="password" value={users.password} onChange={(event) => {
                            setUsers({
                                ...users,
                                password: event.target.value
                            })
                        }} />
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
