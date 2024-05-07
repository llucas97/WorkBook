import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Row, Col } from 'react-bootstrap';

function SignUp() {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [age, setAge] = useState('');
  const [ageError, setAgeError] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);

  useEffect(() => {
    // Check if all input fields are filled
    if (name && email && age && password && confirmPassword && !nameError && !emailError && !ageError && !passwordError && !confirmPasswordError) {
      setSubmitButtonDisabled(false);
    } else {
      setSubmitButtonDisabled(true);
    }
  }, [name, email, age, password, confirmPassword, nameError, emailError, ageError, passwordError, confirmPasswordError]);

  const handleNameChange = (e) => {
    setName(e.target.value);
    // Add validation logic here
    if(!e.target.value.match(/^[가-힣a-zA-Z\s]+$/)){
        setNameError(true);
    } else {
        setNameError(false);
    }
  };
  
  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handleAgeChange = (e) => {
    const ageValue = e.target.value;
    setAge(ageValue);
    let error = "";
    
    if (isNaN(ageValue)) {
      setAgeError("나이를 입력해주세요.");
    } else {
      const ageInt = parseInt(ageValue, 10);
      if (ageInt < 0) {
          setAgeError("나이는 양수여야 합니다.");
      } else if (ageInt !== parseFloat(ageValue)) {
          setAgeError("나이를 실수로 입력하실 수 없습니다.");
      } else if (ageInt < 19) {
          setAgeError("19살 이상만 사용 가능합니다!");
      } else {
        setAgeError(error);
      }
    }
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    let error = "";

    if (typeof passwordValue !== 'string') {
        error = "비밀번호를 입력해주세요!";
    } else if (passwordValue.length < 4) {
        error = "비밀번호는 4자리 이상 입력해주세요.";
    } else if (passwordValue.length > 12) {
        error = "비밀번호는 최대 12자리까지 가능합니다.";
    } else if (!/\d/.test(passwordValue) || !/[a-zA-Z]/.test(passwordValue) || !/[!@#$%^&*(),.?":{}|<>]/.test(passwordValue)) {
        error = "비밀번호는 영어, 숫자, 특수문자를 포함해주세요.";
    }

    setPasswordError(error); 
  };

  const handleConfirmPasswordChange = (e) => {
    const confirmPasswordValue = e.target.value;
    setConfirmPassword(confirmPasswordValue);
    let error = "";

    if (confirmPasswordValue !== password) {
        error = "비밀번호가 일치하지 않습니다.";
    }

    setConfirmPasswordError(error);
  };

  return (
    <div className='d-flex flex-column page-container vh-100'>
      <h3 className='pt-3 pb-5'>회원가입 페이지</h3>
      <Row className='w-100'>
        <Col md={{ span: 6, offset: 3 }}>
          <Form.Control
            className={`border border-black rounded-5 w-100 py-2 ${nameError ? 'is-invalid' : ''}`}
            placeholder="이름을 입력해주세요"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
          {nameError && <div className="invalid-feedback">이름을 입력해주세요.</div>}
        </Col>
      </Row>
      <Row className='w-100 pt-3'>
        <Col md={{ span: 6, offset: 3 }}>
          <Form.Control
            className={`border border-black rounded-5 w-100 py-2 ${emailError ? 'is-invalid' : ''}`}
            placeholder="이메일을 입력해주세요"
            type="text"
            value={email}
            onChange={handleEmail}
          />
          {emailError && <div className="invalid-feedback">이메일을 입력하세요.</div>}
        </Col>
      </Row>
      <Row className='w-100 pt-3'>
        <Col md={{ span: 6, offset: 3 }}>
          <Form.Control
            className={`border border-black rounded-5 w-100 py-2 ${ageError ? 'is-invalid' : ''}`}
            placeholder="나이를 입력해주세요"
            type="text"
            value={age}
            onChange={handleAgeChange}
          />
          {ageError && <div className="invalid-feedback">{ageError}</div>}
        </Col>
      </Row>
      <Row className='w-100 pt-3'>
        <Col md={{ span: 6, offset: 3 }}>
          <Form.Control
            className={`border border-black rounded-5 w-100 py-2 ${passwordError ? 'is-invalid' : ''}`}
            placeholder="비밀번호를 입력해주세요"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && <div className="invalid-feedback">{passwordError}</div>}
        </Col>
      </Row>
      <Row className='w-100 pt-3'>
        <Col md={{ span: 6, offset: 3 }}>
          <Form.Control
            className={`border border-black rounded-5 w-100 py-2 ${confirmPasswordError ? 'is-invalid' : ''}`}
            placeholder="비밀번호 확인"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {confirmPasswordError && <div className="invalid-feedback">{confirmPasswordError}</div>}
        </Col>
      </Row>
      <Row className='w-100 justify-content-center pt-5'>
        <Col md={{ span: 3 }} className='justify-content-center w-50'>
          <button className={`btn btn-outline-warning w-100 rounded-5 py-3 ${submitButtonDisabled ? 'disabled' : ''}`} disabled={submitButtonDisabled}>제출하기</button>
          <div className='d-flex justify-content-around pt-5'>
            <button className='btn text-white'>이미 아이디가 있으신가요?</button>
            <button className='fw-bold btn text-white'>로그인 페이지로 이동하기</button>
          </div>
        </Col>
      </Row>
    </div>
  );    
}

export default SignUp;
