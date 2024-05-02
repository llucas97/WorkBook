import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Row, Col } from 'react-bootstrap';

function SignUp() {
    
    return (
        <div className='d-flex flex-column page-container vh-100'>
          <div className='bg-black d-flex flex-column h-50 justify-content-center'>
            <h3>환영합니다</h3>
          </div>
          <div className='d-flex flex-column h-50'>
            <h3 className='pt-5'>Find your movies !</h3>
            <div className="d-flex justify-content-center mt-5">
              <Row className='w-100'>
                <Col md={{ span: 6, offset: 3 }} className='d-flex'>
                  <Form.Control
                      className="border border-black rounded-4 w-100"
                      placeholder=""
                      type="text"
                  />
                  <button className='bg-primary btn mx-1'>0</button>
                </Col>
              </Row>
            </div>
          </div>
        </div>
    );    
}
export default SignUp;
