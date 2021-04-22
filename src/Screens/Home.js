import React, { useState, useEffect } from 'react';
import {
  Button, Container, Row, Col, Spinner, Card,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import firebase from '../config/firebase';
// import Product from '../Components/Product';

export default function Home() {
  const [products, setProducts] = useState([]);

  const db = firebase.firestore();

  const ref = db.collection('models');

  const getProducts = async () => {
    const items = [];
    const snapshot = await ref.get();
    snapshot.forEach((doc) => {
      const oneDoc = { ...doc.data(), id: doc.id };
      items.push(oneDoc);
    });
    setProducts(items);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Container className="my-3">
        <div>
          <Link to="/upload"><Button>Upload File</Button></Link>
        </div>
        <h5 className="mt-3">Products coming from Database</h5>
        <Row className="my-3">
          {products.length > 0 ? (products.reverse().map((product) => (
            <Col className="mb-4" key={product.id} md={3}>
              <Card className="home_card">
                <Link to={`product/${product.id}`}>
                  <div className="img_container">
                    <img className="img-fluid img-container_img" alt={product.name} src={product.image} />
                  </div>
                  <Card.Body>
                    <span className="product_price">
                      $
                      {product.price}
                    </span>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          )))
            : (
              <Container className="spinner">
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              </Container>
            )}
        </Row>
      </Container>
      {/* <Product /> */}
    </div>
  );
}
