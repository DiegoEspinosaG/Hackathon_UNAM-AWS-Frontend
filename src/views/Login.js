import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  FormInput,
  Button,
  FormGroup,
} from "shards-react";
import { Container } from "shards-react";

export default function Login({login}){
  const [emailAndPass, setEmailAndPass] = useState({
    Email: '',
    Contrasena: ''
  });

  //Gestiona los cambios en los inputs
  function handleInputChange(e) {
    setEmailAndPass({
      ...emailAndPass,
      [e.target.name]: e.target.value
    });
  }

  //Función asíncrona encargada de mandar el formulario
  //al endpoint login
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await login(emailAndPass.Email, emailAndPass.Contrasena)
    } catch (error) {
      console.log(error)
    }
  }
  console.log(emailAndPass)

  return(
    <Container fluid className="main-content-container px-4 pb-4">
      <div className="error">
        <div className="error__content">
          <Card small className="h-100">
            <CardHeader className="border-bottom">
              <h4 className="m-0">Login</h4>
            </CardHeader>
            <CardBody className="d-flex flex-column">
              <form onSubmit={handleSubmit}>
                <FormGroup>
                    <FormInput
                      type="email"
                      name="Email"
                      placeholder="Email"
                      className="Form__field"
                      required
                      onChange={handleInputChange}
                      value={emailAndPass.Email}
                    />
                </FormGroup>
                <FormGroup>
                  <FormInput
                    type="password"
                    name="Contrasena"
                    placeholder="Contraseña"
                    className="Form__field"
                    required
                    onChange={handleInputChange}
                    value={emailAndPass.Contrasena}
                  />
                </FormGroup>
                <FormGroup className="mb-0">
                  <Button theme="accent" type="submit">
                    Entrar
                  </Button>
                </FormGroup>
              </form>
            </CardBody>
          </Card>
        </div>
      </div>
    </Container>
  )
}
