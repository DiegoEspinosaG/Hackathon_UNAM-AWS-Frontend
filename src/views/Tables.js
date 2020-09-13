import React, {useState, useEffect} from "react";
import { Container, 
  Row, 
  Col, 
  Card,
  CardBody, 
  Badge, 
  ListGroup,
  ListGroupItem
} from "shards-react";
import Axios from 'axios'
import PageTitle from "../components/common/PageTitle";
import { ROOT_URL } from '../constants/defaultValues';

export default function Tables(){
  const [profile, setProfile] = useState([]);
  const [loadingProfile, setLoadingProfile] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      try {
        const { data: profiles } = await Axios.get(`${ROOT_URL}/profiles/Restaurant`)
        setProfile(profiles);
        setLoadingProfile(false);
      } catch (error) {
        console.log(error);
        setLoadingProfile(false);
      }
    }
    loadProfile();
  }, []);
  
  /*Si se está cargando un perfil, se muestra el 
  componente loading*/
  if (loadingProfile) {
    return (
      <></>
    )
  }

  return(
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Giros de mis empresas" subtitle="Mis giros" className="text-sm-left" />
      </Row>
      <Row>
        {profile.map((post, idx) => (
          <Col lg="6" sm="12" className="mb-4" key={idx}>
            <Card small className="card-post card-post--aside card-post--1">
              <div
                className="card-post__image"
                style={{ backgroundImage: `url('${post.Imagen}')` }}
              >
                <Badge
                  pill
                  className='card-post__category bg-dark'
                >
                  {post.Giro}
                </Badge>
              </div>
              <CardBody>
                <p className="card-text d-inline-block mb-3">Normas minimas a seguir sobre los comercios de {post.Giro}</p>
                <CardBody className="p-0">
                  <ListGroup flush>
                    <ListGroupItem className="p-3">
                      <span className="d-flex mb-2">
                        <strong className="mr-1">Estado:</strong>{post.Estado}
                      </span>
                      <span className="d-flex mb-2">
                        <strong className="mr-1">AforoMaximoInterior:</strong>{post.AforoMaximoInterior}%
                        <span className="text-success">
                          <i className="material-icons"> check</i>
                        </span>
                      </span>
                      <span className="d-flex mb-2">
                        <strong className="mr-1">AforoMaximoMixto:</strong>{post.AforoMaximoMixto}%
                      </span>
                      <span className="d-flex mb-2">
                        <strong className="mr-1">Hora de apertura:</strong>{post.HoraApertura}
                        <span className="text-success">
                          <i className="material-icons"> check</i>
                        </span>
                      </span>
                      <span className="d-flex mb-2">
                        <strong className="mr-1">Hora de cierre:</strong>{post.HoraCierre}
                        <span className="text-success">
                          <i className="material-icons"> check</i>
                        </span>
                      </span>
                      <span className="d-flex mb-2">
                        <strong className="mr-1">Semaforo:</strong>{post.Semaforo}
                      </span>
                    </ListGroupItem>
                    <span className="d-flex mb-2">
                        <strong className="mr-1">Continuar leyendo...</strong>
                      </span>
                  </ListGroup>
                </CardBody>

                <span className="text-muted">Última actualización {post.Propiedades.FechaModificacion}</span>
              </CardBody>
            </Card>
          </Col>
        ))}
    </Row>
  </Container>
  )
}

