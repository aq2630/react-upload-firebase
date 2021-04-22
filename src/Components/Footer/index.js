import React from 'react';
import './index.css';
import { Col, Row, Container } from 'react-bootstrap';

export default function index() {
  return (
    <div className="footer pt-5 mt-5">

      <Container>
        <Row>
          <Col md={9}>

            <Row>
              <Col md={3}>

                <ul className="uu">
                  <li><a className="link link--white" href="/about-us">Company</a></li>
                  <li><a className="link link--white" href="/blog">Blog</a></li>
                  <li><a className="link link--white" href="/events">Events</a></li>
                  <li><a className="link link--white" href="/pages/press">News</a></li>
                  <li><a className="link link--white" href="/pages/careers">Careers</a></li>
                  <li><a className="link link--white" href="https://help.cgtrader.com">Help Center</a></li>
                  <li><a className="link link--white" href="/about-us#contacts">Contact us</a></li>
                </ul>
              </Col>
              <Col md={3}>
                <ul className="uu">
                  <li><a className="link link--white" href="/3d-models">Buy 3D Models</a></li>
                  <li><a className="link link--white" href="/3d-modeling-jobs">Freelance 3D Projects</a></li>
                  <li><a className="link link--white" href="/free-3d-models">Free 3D Models</a></li>
                </ul>
              </Col>
              <Col md={3}>

                <ul className="uu">
                  <li><a className="link link--white" href="/pages/sell-3d-models">Sell 3D Models</a></li>
                  <li><a className="link link--white" href="/3d-community">Community</a></li>
                  <li><a className="link link--white" href="/designers">3D designers</a></li>
                  <li><a className="link link--white" href="/forum">Forum</a></li>
                  <li><a className="link link--white" href="/freelance-with-us">Freelance with us</a></li>
                  <li><a className="link link--white" href="/pages/cgtrader-loyalty-discounts">Loyalty credits program</a></li>
                </ul>

              </Col>
              <Col md={3}>

                <ul className="uu">
                  <li><a className="link link--white" href="https://arsenal.cgtrader.com/">ARsenal</a></li>
                  <li><a className="link link--white" href="https://arsenal.cgtrader.com/solutions/3d-viewer">3D Viewer</a></li>
                  <li><a className="link link--white" href="https://arsenal.cgtrader.com/solutions/3d-product-visualization">3D Product Visualization</a></li>
                  <li><a className="link link--white" href="https://arsenal.cgtrader.com/solutions/3d-digital-asset-management">3D Digital Asset Management</a></li>
                  <li><a className="link link--white" href="https://arsenal.cgtrader.com/solutions/3d-modeling">Custom 3D Modeling</a></li>
                </ul>
              </Col>
            </Row>

          </Col>

          <Col md={3}>

            <form>
              <p className="text-white">Subscribe to our news:</p>

              <input className="input" type="text" placeholder="Enter your email" />

              <button type="button" className="btn btn-success btn-lg btn-block pt-3 mt-5 ">Subcriber</button>

              <p className="text-extra-small text-white">
                By subscribing you confirm that you have read and accept our &nbsp;
                <a className="link link--secondary" href="/pages/terms-and-conditions" target="_blank">Terms of Use</a>
              </p>

            </form>

          </Col>
        </Row>

      </Container>

    </div>
  );
}
