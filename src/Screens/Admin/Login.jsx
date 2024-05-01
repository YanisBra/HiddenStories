import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FIREBASE_AUTH } from "../../Config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Form, Button, Spinner, Container, Row, Col } from "react-bootstrap";

const LoginScreen = () => {
  const auth = FIREBASE_AUTH;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <h2 className="text-center mb-4">Admin</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            {loading ? (
              <Button variant="primary" disabled className="w-100">
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Loading...
              </Button>
            ) : (
              <Button variant="primary" onClick={signIn} className="w-100 mt-3">
                Connexion
              </Button>
            )}

            <Link to="/" className="d-block text-center mt-3">
              <Button variant="secondary">Retourner au Webdoc</Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginScreen;
