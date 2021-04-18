import React, {useState, useEffect} from 'react'
import firebase from '../../config/firebase'
import { Card,Button,Nav,NavDropdown ,Navbar,Form ,FormControl,InputGroup,Col,Row,Container} from 'react-bootstrap';
import Product1  from "../../Assets/product1.jpg"
import Product2  from "../../Assets/product2.jpg"
import Product3  from "../../Assets/product3.png"
import Product4  from "../../Assets/product4.jpg"
import Product5  from "../../Assets/product5.jpg"
import Product6  from "../../Assets/product6.jpg"
import Product7  from "../../Assets/product7.png"
import Product8  from "../../Assets/product8.jpg"
import Product9  from "../../Assets/product9.jpg"
import Product10  from "../../Assets/product10.jpg"
import Product11  from "../../Assets/product11.jpg"
import Product12  from "../../Assets/product12.png"
import Product13  from "../../Assets/product13.jpg"
import Product14  from "../../Assets/product14.jpg"
import Product15  from "../../Assets/product15.jpg"
import Product16  from "../../Assets/product16.png"



export default function Product() {

    return (
        <div className="product">
            <Container >
  <Row>
    <Col className="text-center pt-3" md={12}>
    <h3>USDZ 3D models - download USDZ (USDZ) file format 3D assets</h3>
    <p>There currently are 2,673 3D models ready for download in the USDZ file format on the marketplace. Feel free to browse the collection and do not forget to use the other search filters to find PBR, rigged, animated or printable 3D models for your projects. If you’re a game developer use the ‘Poly count’ filter to view low-poly 3D models which need less computational power to render. The majority of 3D assets on CGTrader are available in several file formats, and if a model you want is unavailable in the USDZ file format, you can always ask for a file conversion by selecting ‘Request free file format conversion’ on the product page. You can also visit our 3D Jobs page and post a request for model conversion, custom models and any other modeling services you might need.</p>
    </Col>
  </Row>
</Container>
<Container>  
  <Row>
    <Col className="pt-3" md="3">
    <Card style={{ width: '16rem' }}>
    <img  src ={Product1}/>
  <Card.Body> 

  <span> 42.00$</span>
  </Card.Body>
</Card>

    </Col  >
    <Col className="pt-3" md="3">
    <Card style={{ width: '16rem' }}>
    <img  src ={Product2}/>
  <Card.Body>  

  <span> 09.50$</span>
  </Card.Body>
</Card> 
    </Col>
    <Col className="pt-3" md="3">
    <Card style={{ width: '16rem' }}>
    <img  src ={Product3}/>
    
  
  <Card.Body>
  <span> 24.50$</span>
  </Card.Body>
</Card>
    </Col>
    <Col  className="pt-3" md="3" > <Card style={{ width: '16rem' }}>
    <img  src ={Product4}/>
  <Card.Body>
    
  <span> 17.43$</span>
  </Card.Body>
</Card></Col>
  </Row>
</Container>



<Container>
  
  <Row>
    <Col className="pt-3" md="3">
    <Card style={{ width: '16rem' }}>
    <img  src ={Product5}/>
  <Card.Body>
       
  <span> 28.00$</span>
  </Card.Body>
</Card>

    </Col>
    <Col className="pt-3" md="3">
    <Card style={{ width: '16rem' }}>
    <img  src ={Product6}/>
  <Card.Body>
      
  <span> 10.20$</span>
  </Card.Body>
</Card> 
    </Col>
    <Col className="pt-3"  md="3">
    <Card style={{ width: '16rem' }}>
    <img  src ={Product7}/>
  <Card.Body>
      
  <span> 9.09$</span>
  </Card.Body>
</Card>
    </Col>
    <Col  className="pt-3"  md="3" > <Card style={{ width: '16rem' }}>
    <img  src ={Product8}/>
  <Card.Body>
   
  <span> 17.08$</span>
  </Card.Body>
</Card></Col>
  </Row>
</Container>




<Container>
  
  <Row>
    <Col className="pt-3" md="3">
    <Card style={{ width: '16rem' }}>
    <img  src ={Product9}/>
  <Card.Body>
      
  <span> 8.40$</span>
  </Card.Body>
</Card>

    </Col>
    <Col className="pt-3" md="3">
    <Card style={{ width: '16rem' }}>
    <img  src ={Product10}/>
  <Card.Body>
    
  </Card.Body>
</Card> 
    </Col>
    <Col className="pt-3" md="3">
    <Card style={{ width: '16rem' }}>
    <img  src ={Product11}/>
  <Card.Body>
       
  <span> 5.00$</span>
  </Card.Body>
</Card>
    </Col>
    <Col className="pt-3" md="3" > <Card style={{ width: '16rem' }}>
    <img  src ={Product12}/>
  <Card.Body>
     
  <span> 29.50$</span>
  </Card.Body>
</Card></Col>
  </Row>
</Container>

<Container>
  
  <Row>
    <Col className="pt-3" md="3">
    <Card style={{ width: '16rem' }}>
    <img  src ={Product13}/>
  <Card.Body>
       
  <span> 24.44$</span>
  </Card.Body>
</Card>

    </Col>
    <Col className="pt-3" md="3">
    <Card style={{ width: '16rem' }}>
    <img  src ={Product14}/>
  <Card.Body>
    
  </Card.Body>
</Card> 
    </Col>
    <Col className="pt-3" md="3">
    <Card style={{ width: '16rem' }}>
    <img  src ={Product15}/>
  <Card.Body>
    
  </Card.Body>
</Card>
    </Col>
    <Col className="pt-3" md="3" > <Card style={{ width: '16rem' }}>
    <img  src ={Product16}/>
  <Card.Body>
    
  </Card.Body>
</Card></Col>
  </Row>
</Container>
        </div>
    )
}
