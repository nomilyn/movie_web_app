import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import MovieContext from "../context/MovieContext";


const Login = () => {
    const { users, setUsers } = useContext(MovieContext);

    const [user, setUser] = useState({
        firstName: " ",
        lastName: " ",
        email: " ",
        password: " ",
    })

    const submitForm = (event) => {
        event.preventDefault();
        console.log(user.email);

        fetch("http://localhost:5000/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                fetch("http://localhost:5000/users/email/" + user.email)
                    .then(res => res.json())
                    .then((data) => {
                        setUsers(
                            {
                                password: data[0].password,
                                email: data[0].email,
                                firstName: data[0].firstName,
                                lastName: data[0].lastName
                            }
                        )
                        console.log(data);
                        history.push('/dashboard');
                    })
                    .catch(err => console.log(`Error : ${err}`))
            })
            .catch(err => console.log(`Error : ${err}`))
    }

    let history = useHistory();
    const closeForm = () => {
        history.push('/');
    }

    const registerForm = () => {
        history.push('/sign-up');
    }
    
    return (
        <Modal.Dialog>
            <Modal.Header closeButton onClick={closeForm}>
                <Modal.Title>Sign In to DMmat</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form action="/" method="POST" onSubmit={submitForm}>
                    <Form.Group controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" name="email" id="email" value={user.email} onChange={(event) => {
                            setUser({
                                ...user,
                                email: event.target.value
                            })
                        }} />
                    </Form.Group>

                    <Form.Group controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" id="password" value={users.password} onChange={(event) => {
                            setUser({
                                ...user,
                                password: event.target.value
                            })
                        }} />
                        <Button variant="link">Forgot Your Password?</Button>
                    </Form.Group>

                    <Button variant="primary" type="submit" size="lg" block>
                        Sign In
                    </Button>
                    <Button variant="outline-primary" size="lg" block onClick={registerForm}>
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

