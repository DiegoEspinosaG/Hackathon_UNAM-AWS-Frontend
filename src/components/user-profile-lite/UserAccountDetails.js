import React from "react";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  Button
} from "shards-react";

export default function UserAccountDetails  ({ user }) {
  let Direccion = user.Calle + ' ' + user.Numero;

  return (
    <Card small className="mb-4">
      <CardHeader className="border-bottom">
        <h6 className="m-0">Mi información</h6>
      </CardHeader>
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <Row>
            <Col>
              <Form>
                <Row form>
                  {/* First Name */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feFirstName">Nombre</label>
                    <FormInput
                      id="feFirstName"
                      placeholder="First Name"
                      value={user.Nombre}
                      onChange={() => {}}
                    />
                  </Col>
                  {/* Last Name */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feLastName">Apellido</label>
                    <FormInput
                      id="feLastName"
                      placeholder="Last Name"
                      value={user.Apellido}
                      onChange={() => {}}
                    />
                  </Col>
                </Row>

                {/* Email
                <Row form>
                  <Col md="6" className="form-group">
                    <label htmlFor="feEmail">Email</label>
                    <FormInput
                      type="email"
                      id="feEmail"
                      placeholder="Email Address"
                      value={user.Email}
                      onChange={() => {}}
                      autoComplete="email"
                    />
                  </Col>
                </Row> */}

                <FormGroup>
                  <label htmlFor="feAddress">Dirección</label>
                  <FormInput
                    id="feAddress"
                    placeholder="Address"
                    value={Direccion}
                    onChange={() => {}}
                  />
                </FormGroup>
                <Row form>
                  {/* City */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feCity">Ciudad</label>
                    <FormInput
                      id="feCity"
                      placeholder="City"
                      value={user.Ciudad}
                      onChange={() => {}}
                    />
                  </Col>
                  {/* State */}
                  <Col md="4" className="form-group">
                    <label htmlFor="feInputState">Estado</label>
                    <FormInput
                      id="feCity"
                      placeholder="City"
                      value={user.Estado}
                      onChange={() => {}}
                    />
                  </Col>
                  {/* Zip Code */}
                  <Col md="2" className="form-group">
                    <label htmlFor="feZipCode">Código Postal</label>
                    <FormInput
                      id="feZipCode"
                      placeholder="Zip"
                      value={user.CodigoPostal}
                      onChange={() => {}}
                    />
                  </Col>
                </Row>

                {/*
                <Row form>
                  <Col md="12" className="form-group">
                    <label htmlFor="feDescription">Descripción</label>
                    <FormTextarea id="feDescription" rows="5" />
                  </Col>
                </Row>
                */}
                <Button theme="accent">Actualizar</Button>
              </Form>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    </Card>
  )
}

