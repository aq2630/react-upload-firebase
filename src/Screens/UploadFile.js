import React, {useState, useEffect} from 'react'
import firebase from '../config/firebase'
import { Container, Row, Col, Form, Button, ProgressBar, Alert} from 'react-bootstrap'

const UploadFile = ({ history }) => {
    const [progress, setProgress] = useState(0)
    const [data, setData] = useState(null)
    const [error, setError] = useState(false)
    const [user, setUser] = useState(null)
    const db = firebase.firestore()
    const ref = db.collection('products');

    const getUser = async () => {
        firebase.auth().onAuthStateChanged(user => {
            setUser(user)
        })    
    }

    useEffect(() => {
        getUser()
    })
    console.log(user)


    const changeHandler = async (e) => {
        
        const file = e.target.files[0]
        const storageRef = firebase.storage().ref(`uploads/${file.name}`)
        const task = storageRef.put(file)
        task.on('state_changed',(snapshot) => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            setProgress(percentage)
            storageRef.getDownloadURL().then(url => {
                setData({
                    name:"image upload testing",
                    image:url
                })
                setError(false)
            })
            
            
        })        
    }
    
    const submitHandler = (e) => {
        e.preventDefault()
        if (data) {
            ref.add(data)        
            history.push('/')
            
            
        } else {
            setError(true)
        }
    }

    return (
        <>
        {user ? (
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
                                <div>
                                    {error ? (<Alert variant="danger">No File Selected</Alert>) : ""}
                                </div>
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

        ) : (<Alert>Please Login to uplaod files</Alert>)}
        </>
    )
}

export default UploadFile
