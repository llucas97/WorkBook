import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Todo() {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);
    const [done, setDone] = useState([]);

    const handleInputChange = (event) => {
        setTodo(event.target.value);
    };

    const handleEnterKey = (event) => {
        if (event.key === 'Enter') {
            setTodos([...todos, todo]);
            setTodo('');
        }
    };

    const completeTask = (index) => {
        const completedTask = todos[index];
        setDone([...done, completedTask]);
        setTodos(todos.filter((_, i) => i !== index));
    };

    const removeTask = (index, list) => {
        if (list === 'done') {
            setDone(done.filter((_, i) => i !== index));
        } else {
            setTodos(todos.filter((_, i) => i !== index));
        }
    };

    return (
        <div className="align-items-center bg d-flex flex-column vh-100 vw-100" style={{backgroundColor: '#ecf0f6'}}>
            <h1 className="mt-5 fw-bold">UMC Study Plan</h1>
            <Form.Control
                className="border border-black mt-5 rounded-2 todo w-75"
                value={todo}
                onChange={handleInputChange}
                onKeyPress={handleEnterKey}
                placeholder="스터디 계획을 작성해보세요!"
                type="text"
            />
            <Row className="d-flex justify-content-around mt-4 tasks col-9" style={{textAlign: 'center'}}>
                <Col md={5}>
                    <h5 className="mb-4">해야 할 일</h5>
                    <div className="d-flex flex-column">
                        {todos.map((task, index) => (
                            <div key={index} className="border-4 border-bottom border-info-subtle d-flex justify-content-between mb-3">
                                <h5 className="fs-3 fw-bold">{task}</h5>
                                <Button variant="primary" onClick={() => completeTask(index)}>완료</Button>
                            </div>
                        ))}
                    </div>
                </Col>
                <Col md={5}>
                    <h5 className="mb-4">해낸 일</h5>
                    <div className="d-flex flex-column">
                        {done.map((task, index) => (
                            <div key={index} className="border-4 border-bottom border-info-subtle d-flex justify-content-between mb-3">
                                <h5 className="fs-3 fw-bold">{task}</h5>
                                <Button variant="primary" onClick={() => removeTask(index, 'done')}>삭제</Button>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Todo;
