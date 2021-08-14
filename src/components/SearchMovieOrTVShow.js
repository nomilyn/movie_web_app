import React, { useState, useEffect, useContext } from 'react'
import MovieContext from "../context/MovieContext";
import { useHistory } from 'react-router-dom';
import { Modal, Form, Col, Button } from 'react-bootstrap';



const SearchMovieOrTVShow = () => {
    const { id, setId } = useContext(MovieContext);
    useEffect(() => {
        setId({
            title: ""
        })
    }, [])

    const handleChange = (e) => {
        id.title = e.target.value;
    }

    let history = useHistory();

    const onClickButton = () => {
        if (id.title != "")
            history.push("/SearchMovieOrTVShowList");
        else
            alert("Please enter a title that CONTAINS any character/s");
    }

    return (
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Search a Movie or TV Show</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>Search by Title that CONTAINS </Form.Label>
                        <Form.Control type="text" name="search" id="search" onChange={(event) => handleChange(event)} />
                    </Form.Group>
                    <Button variant="primary" type="submit" size="lg" block onClick={(event) => onClickButton()}>
                        Search
                    </Button>
                </Form.Row>
            </Modal.Body>
        </Modal.Dialog>
    )
}

export default SearchMovieOrTVShow



