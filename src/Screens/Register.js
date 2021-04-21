import React, {useState, useEffect} from 'react'
import firebase from '../config/firebase'
import { Container, Row, Col, Form, Button, Alert} from 'react-bootstrap'

const Register = ({ history }) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState(false)
    const [message, setMessage] = useState('')

    const changeEmail = async (e) => {
        setEmail(e.target.value)       
    }
    const changePassword = async (e) => {
        setPassword(e.target.value)       
    }
    
    const submitHandler = (e) => {
        e.preventDefault()
        if (!email || !password) {
            setMessage("Please Enter Details")
            setError(true)
        } else {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Signed in when account created
                    console.log(userCredential.user);
                    history.push('/')
                    setError(false)
                })
                .catch((error) => {
                    setError(true)
                    setMessage(error.message) 
                });
        }

    }

    return (
        <div className="upload-form"> 
        <Container>
            <Row>
                <Col xs={12} className="d-flex justify-content-center align-items-center flex-column">
                    <div className="form-container">
                    <h3>Pleae Register your Account</h3>
                    {error ? <Alert variant="danger">{message}</Alert> : ""}
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={changeEmail} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={changePassword} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </div>
                </Col>
            </Row>
            </Container>
            
        </div>
    )
}

export default Register