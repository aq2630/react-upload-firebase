/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import {
  Container, Row, Col, Spinner,
} from 'react-bootstrap';
import firebase from '../config/firebase';
import '../App.css';
import FlickitySlider from '../Components/FlickitySlider';

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState(null);
  const db = firebase.firestore();
  const ref = db.collection('models');

  const getProduct = async () => {
    const snapshot = await ref.doc(match.params.id).get();
    setProduct(snapshot.data());
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="product_screen">
      {!product
        ? (
          <Container className="spinner my-5">
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </Container>
        )
        : (
          <Container className="my-5">
            <Row>
              <Col md={8}>
                <div className="product_image_card">
                  {product.galleryImages ? product.galleryImages.length > 1 ? (
                    <FlickitySlider image={product.galleryImages} />
                  ) : (
                    <img className="img-fluid" src={product.image} alt={product.name} />
                  )
                    : (
                      <img className="img-fluid" src={product.image} alt={product.name} />
                    )}
                  <h3>{product.name}</h3>
                </div>
                <div className="product_image_card mt-3">
                  <h3>Container for Product description</h3>
                </div>
              </Col>
              <Col md={4}>
                <div className="product_card">
                  <h4>
                    $
                    {product.price}
                  </h4>
                  <h4>Some Info</h4>
                </div>
              </Col>
            </Row>
          </Container>
        )}

    </div>
  );
};

export default ProductScreen;
