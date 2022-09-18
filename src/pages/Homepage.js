import React, { useState } from 'react';
import { Card, Container, Form, Button, Row, Col } from 'react-bootstrap'
import './home.css'

const Homepage = (props) => {
    const [level, setlevel] = useState('basic');

    return (
        <Container>
            <Row>
                <Col sm={6}>
                    <Card style={{ minHeight: '250px', minWidth: '500px', marginBottom: '30px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h4 style={{ marginTop: '30px', marginLeft: '20px' }}>Web Development</h4>
                            <Form.Select style={{ width: '20%', float: 'right', marginRight: '20px', marginTop: '20px' }} onChange={(e) => setlevel(e.target.value)}>
                                <option value="basic">Basic</option>
                                <option value="moderate">Moderate</option>
                                <option value="advanced">Advanced</option>
                            </Form.Select>
                        </div><br />
                        <small style={{ marginLeft: '20px' }}>Select your level and click 'GO' to evaluate yourself</small>
                        <div style={{ marginLeft: '20px', marginTop: '20px' }}>
                            Basic - HTML, CSS, JS<br />
                            Moderate - Basics with inclusion of ReactJS<br />
                            Advanced - It includes complete Full Stack
                        </div><br />
                        <Button style={{ width: '20%', marginLeft: '75%', marginBottom: '20px' }} onClick={() => props.history.push('/web-development', { "level": level })}>GO</Button>
                    </Card>
                </Col>
                <Col sm={6}>
                    <Card style={{ minHeight: '250px', minWidth: '500px', marginBottom: '30px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h4 style={{ marginTop: '30px', marginLeft: '20px' }}>App Development</h4>
                            <Form.Select style={{ width: '20%', float: 'right', marginRight: '20px', marginTop: '20px' }} onChange={(e) => setlevel(e.target.value)}>
                                <option value="basic">Basic</option>
                                <option value="moderate">Moderate</option>
                                <option value="advanced">Advanced</option>
                            </Form.Select>
                        </div><br />
                        <small style={{ marginLeft: '20px' }}>Select your level and click 'GO' to evaluate yourself</small>
                        <div style={{ marginLeft: '20px', marginTop: '20px' }}>
                            Basic - Basic Overview of how apps work<br />
                            Moderate - Creation of screens and navigation<br />
                            Advanced - introduce native integration with application
                        </div><br />
                        <Button style={{ width: '20%', marginLeft: '75%', marginBottom: '20px' }} onClick={() => props.history.push('/app-development', { "level": level })}>GO</Button>
                    </Card>
                </Col>
                <Col sm={6}>
                    <Card style={{ minHeight: '250px', minWidth: '500px', marginBottom: '30px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h4 style={{ marginTop: '30px', marginLeft: '20px' }}>Data Science</h4>
                            <Form.Select style={{ width: '20%', float: 'right', marginRight: '20px', marginTop: '20px' }} onChange={(e) => setlevel(e.target.value)}>
                                <option value="basic">Basic</option>
                                <option value="moderate">Moderate</option>
                                <option value="advanced">Advanced</option>
                            </Form.Select>
                        </div><br />
                        <small style={{ marginLeft: '20px' }}>Select your level and click 'GO' to evaluate yourself</small>
                        <div style={{ marginLeft: '20px', marginTop: '20px' }}>
                            Basic - Statistics and basic principles<br />
                            Moderate - Few basic algorithms<br />
                            Advanced - Implementation of algorithms
                        </div><br />
                        <Button style={{ width: '20%', marginLeft: '75%', marginBottom: '20px' }} onClick={() => props.history.push('/data-science', { "level": level })}>GO</Button>
                    </Card>
                </Col>
                <Col sm={6}>
                    <Card style={{ minHeight: '250px', minWidth: '500px', marginBottom: '30px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h4 style={{ marginTop: '30px', marginLeft: '20px' }}>Cyber Security</h4>
                            <Form.Select style={{ width: '20%', float: 'right', marginRight: '20px', marginTop: '20px' }} onChange={(e) => setlevel(e.target.value)}>
                                <option value="basic">Basic</option>
                                <option value="moderate">Moderate</option>
                                <option value="advanced">Advanced</option>
                            </Form.Select>
                        </div><br />
                        <small style={{ marginLeft: '20px' }}>Select your level and click 'GO' to evaluate yourself</small>
                        <div style={{ marginLeft: '20px', marginTop: '20px' }}>
                            Basic - Basics of linux and it's tools<br />
                            Moderate - Bash Scripts and third party packages <br />
                            Advanced - Automated scripts running 
                        </div><br />
                        <Button style={{ width: '20%', marginLeft: '75%', marginBottom: '20px' }} onClick={() => props.history.push('/cyber-security', { "level": level })}>GO</Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Homepage;