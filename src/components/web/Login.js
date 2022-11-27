import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

function Login() {

  const [role, setRole]=useState([]);

  useEffect(()=>{
    fetch("/data/role.json").then(res=>res.json()).then(data=>{
      setRole(data)
    })
  },[])

  return (
    <div>
      <Container>
        <Row className="d-flex justify-content-center align-items-center" style={{marginTop:"100px",marginBottom:"100px"}}>
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">Brand</h2>
                  <p className=" mb-5">Please enter your username and password!</p>
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Username
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter username"/>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                      >
                        <Form.Label>Vai trò</Form.Label>
                        <Form.Select style={{display:"block"}}>
                          {role.map(r=>{
                            return(
                              <option value={r.id}>{r.ten}</option>
                            )
                          })}
                        </Form.Select>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <p className="small">
                          <a className="text-primary" href="#!">
                            Forgot password?
                          </a>
                        </p>
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Login
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{" "}
                        <a href="/sign-up" className="text-primary fw-bold">
                          Sign Up
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;