import React, {useState, useEffect} from 'react'
import firebase from '../config/firebase'
import Product from '../Components/Product'
import { Button, Container, Row, Col, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'



export default function Home() {
  const [products, setProducts] = useState([])

  const db = firebase.firestore()

  const ref = db.collection('products');

  const getProducts = async () => {
    const items = [];
    const snapshot = await ref.get()    
        snapshot.forEach((doc) => {
            let oneDoc = {...doc.data(), 'id': doc.id}
            console.log("oneDoc => ", oneDoc)
            items.push(oneDoc)
        });
    setProducts(items)
}
  useEffect(() => {
    getProducts()
  },[])

  console.log("Products => ", products)
    return (
        <div >
            <Container className='my-3'>
            <div>
            <Link to='/upload'><Button>Upload File</Button></Link>
            </div>
            <h5 className='mt-3'>Products coming from Database</h5>
            <Row className="my-3">
                {products.length > 0 ? (products.reverse().map((product, i) => {
                    return <Col key={i} md={3}>
                                    <Link to={`product/${product.id}`}><img className="img-fluid" src={product.image} alt={product.name}/></Link> 
                            </Col>
                })) : 
                (
                <Container className="spinner">
                    <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                    </Spinner>
                </Container>
            )}
            </Row>
            </Container>
            <Product />
        </div>
    )
}
