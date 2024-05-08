import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Row, Col } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

function Login() {

  const location = useLocation();
  const navigate = useNavigate();

  const { name, email, age, password, confirmPassword } = location.state || {};
  
  // 데이터가 있는지 확인 후 console.log로 찍어줍니다.
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Age:", age);
  console.log("Password:", password);
  console.log("Confirm Password:", confirmPassword);
    
    return (
        <div className='d-flex flex-column page-container vh-100'>
          <h3 className='pt-3 pb-5'>로그인 페이지</h3>
          <Row className='w-100'>
            <Col md={{ span: 6, offset: 3 }} className='d-flex'>
              <Form.Control
                  className="border border-black rounded-5 w-100 py-2"
                  placeholder="아이디"
                  type="text"
              />
            </Col>
          </Row>
          <Row className='w-100 pt-4'>
            <Col md={{ span: 6, offset: 3 }} className='d-flex'>
              <Form.Control
                  className="border border-black rounded-5 w-100 py-2"
                  placeholder="비밀번호"
                  type="password"
              />
            </Col>
          </Row>
          <Row className='w-100 justify-content-center pt-5'>
            <Col md={{ span: 3 }} className='justify-content-center w-50'>
              <button 
                className='btn btn-outline-light py-3 rounded-5 w-100'
                onClick={() => {navigate("/Search")}}
                >로그인
              </button>
            </Col>
          </Row>
        </div>
    );    
}
export default Login;
