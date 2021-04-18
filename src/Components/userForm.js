import React, { Component } from 'react'
import { Container, Row, Col, Form, Button, Image} from 'react-bootstrap'
import './form.css'

export default class UserForm extends Component {

    state =  {

    }
    render() {
        return (
            <div>
            <Container>
                <Row>
                    <Col xs={12} >
                        <div className="d-flex mb-3">
                            <div className="info mr-auto">
                                <h4>Personal information</h4>
                                <p>update your personal informatin</p>
                            </div>
                            <div className="buttons d-flex justify-content-center align-items-center">
                                <a href="www.google.com" className="save_btn" >Save Changes</a>
                                <a href="www.google.com" className="cancel_btn ml-2" >Cancel</a>
                            </div>
                        </div>
                        <hr />
                    </Col>
                    <Row>

                    </Row>
                    <Col md={12} sm={12}>
                        <Form>                          
                        <Form.Group className="my-3" as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={3}>
                            Avatar
                            </Form.Label>
                            <Col sm={9}>
                            <Image src="https://lh3.googleusercontent.com/proxy/vhFeBM0tVF1_RwI44nhO6qRg_C7fQwnvARN8DffHT2-fFhA6Dr2CvYghBoe0AAPK1jz2SfG9WlebrMOfII9NvwUFIEPOwLJ_E2rdgjLaRl37LLjbGgCaCsZTj9fq" />
                            </Col>
                            </Form.Group>   
                        <Form.Group className="mb-4" as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={3}>
                            First Name
                            </Form.Label>
                            <Col sm={9}>
                            <Form.Control className="input" type="text" placeholder="First Name" />
                            </Col>
                        </Form.Group>
                        <Form.Group className="mb-4" as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={3}>
                            last Name
                            </Form.Label>
                            <Col sm={9}>
                            <Form.Control className="input" type="email" placeholder="last Name" />
                            </Col>
                        </Form.Group>
                        <Form.Group className="mb-4" as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={3}>
                            Company Name
                            </Form.Label>
                            <Col sm={9}>
                            <Form.Control className="input" type="email" placeholder="Company Name" />
                            </Col>
                        </Form.Group>
                      </Form>
                </Col> 
                </Row>
            </Container>
                
            </div>
        )
    }
}
