import React, {useState, useEffect} from 'react'
import firebase from '../config/firebase'
import { Container, Row, Col, Form, Button, ProgressBar} from 'react-bootstrap'

const UploadFile = ({ history }) => {
    const [progress, setProgress] = useState(0)
    const [downloadUrl, setDownloadedUrl] = useState('')
    const db = firebase.firestore()
    const ref = db.collection('products');


    const changeHandler = async (e) => {
        
        const file = e.target.files[0]
        const storageRef = firebase.storage().ref(`uploads/${file.name}`)
        const task = storageRef.put(file)
        task.on('state_changed',(snapshot) => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            setProgress(percentage)
            storageRef.getDownloadURL().then(url => setDownloadedUrl(url))
            
        })        
    }

    const submitHandler = (e) => {
        e.preventDefault()
        history.push('/')
        const data = {
            name:"image uplad testing",
            image: downloadUrl,
        }
        ref.add(data)        
    }

    return (
        <div className="upload-form"> 
        <Container>
            <Row>
                <Col xs={12} className="d-flex justify-content-center align-items-center flex-column">
                    <div className="form-container">
                    <h3>Files can be uploaded from here</h3>
                    <Form onSubmit={submitHandler}>
                        <div className="my-3">
                        <Form.Group>
                            <Form.File id="upload-file"  onChange={changeHandler} />
                        </Form.Group>
                        </div>
                        <div>
                        <ProgressBar className="my-3" now={progress} label={`${progress}%`} />
                        </div>
                        <div>
                        <Button variant="primary" type="submit" >
                            Submit
                        </Button>                            
                        </div>
                    </Form>
                    </div>
                </Col>
            </Row>
            </Container>
            
        </div>
    )
}

export default UploadFile
