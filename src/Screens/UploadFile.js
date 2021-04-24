import React, { useState, useEffect } from 'react';
import {
  Container, Row, Col, Form, Button, ProgressBar, Alert,
} from 'react-bootstrap';
import firebase from '../config/firebase';

const UploadFile = ({ history }) => {
  const [progress, setProgress] = useState(0);
  const [progressGallery, setProgressGallaery] = useState(0);
  const [name, setName] = useState(null);
  const [mainDownloadUrl, setMainDownloadUrl] = useState([]);
  const [downloadUrls, setDownloadUrls] = useState([]);
  const [price, setPrice] = useState(null);
  // const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [user, setUser] = useState(null);
  const db = firebase.firestore();
  const ref = db.collection('models');

  const getUser = async () => {
    firebase.auth().onAuthStateChanged((u) => {
      setUser(u);
    });
  };

  useEffect(() => {
    getUser();
  });

  // const changeHandler = async (e) => {
  //   const file = e.target.files[0];
  //   const storageRef = firebase.storage().ref(`uploads/${file.name}`);
  //   const task = storageRef.put(file);
  //   task.on('state_changed', (snapshot) => {
  //     const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //     setProgress(percentage);
  //     storageRef.getDownloadURL().then((url) => {
  //       setMainDownloadUrl(url);
  //       setError(false);
  //     });
  //   });
  // };
  const changeHandlerGallery = async (e) => {
    const { files } = e.target;
    Array.from(files).forEach(async (file) => {
      const storageRef = firebase.storage().ref(`uploads/${file.name}`);
      const task = storageRef.put(file);
      task.on('state_changed', (snapshot) => {
        const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgressGallaery(percentage);
      }, (err) => console.log(err),
      () => {
        storageRef.getDownloadURL().then((url) => {
          setDownloadUrls((prevValue) => [...prevValue, url]);
          setError(false);
        });
      });
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (name === null || downloadUrls.length === 0 || price === null) {
      setError(true);
    } else {
      ref.add({
        name, price, image: downloadUrls[0], galleryImages: downloadUrls,
      });
      history.push('/');
    }
  };

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
                        <Form.Control required type="text" placeholder="Enter Product Name" value={name} onChange={(e) => setName(e.target.value)} />
                      </Form.Group>
                      <Form.Group>
                        <Form.Control required type="number" placeholder="Enter Product Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                      </Form.Group>
                      {/* <Form.Group>
                        <Form.File
                          id="custom-file"
                          label="Select Main Image"
                          custom
                          onChange={changeHandler}
                        />
                      </Form.Group>
                      <div>
                        <ProgressBar className="my-3" now={progress} label={`${progress}%`} />
                      </div> */}
                      <Form.Group>
                        <Form.File
                          id="custom-file"
                          label="Select one or more Images"
                          custom
                          onChange={changeHandlerGallery}
                          multiple
                        />
                      </Form.Group>
                    </div>
                    <div>
                      <ProgressBar className="my-3" now={progressGallery} label={`${progressGallery}%`} />
                    </div>
                    <div>
                      <div>
                        {error ? (<Alert variant="danger">All Fields are required</Alert>) : ''}
                      </div>
                      <Button variant="primary" type="submit">
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
  );
};

export default UploadFile;
