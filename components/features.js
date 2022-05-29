import Image from 'next/image';
import {
    Container, Row, Col,
} from 'react-bootstrap';

export default function features() {
  return (
    <Container fluid id="features" className="py-5">
    <Row>
        <Col sm={12} md={12} className="text-center">
          <h1>Features</h1>
        </Col>
        <Col sm={12} md={6} className="pt-5 px-0">
          <h3 className="m-0 p-0 uppercase text-center">Job offers</h3>
          <Image
            // loader={myLoader}
            src="/images/features1.png"
            alt="features"
            width={500}
            height={400}
            className="m-0 p-0"
          />
        </Col>
        <Col sm={12} md={6} className="d-block d-sm-flex align-items-center">
          <div>
            <h1>Features</h1>
            <h6>Features yang dapat kami berikan!</h6>
            <p className="m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus excepturi quam accusantium id nostrum facilis ea reprehenderit odio! Rerum, nobis!</p>
            <p className="m-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam ex repellendus dolores, earum vel labore repellat! Dolorum sed unde nesciunt eum a! Dicta saepe modi nulla incidunt officia, ratione ducimus!</p>
          </div>
        </Col>

        <Col sm={12} md={6} className="d-none d-sm-flex align-items-center">
          <div>
            <h1>Features</h1>
            <h6>Features yang dapat kami berikan!</h6>
            <p className="m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus excepturi quam accusantium id nostrum facilis ea reprehenderit odio! Rerum, nobis!</p>
            <p className="m-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam ex repellendus dolores, earum vel labore repellat! Dolorum sed unde nesciunt eum a! Dicta saepe modi nulla incidunt officia, ratione ducimus!</p>
          </div>
        </Col>
        <Col sm={12} md={6} className="pt-5 px-0 d-none d-sm-block">
          <h3 className="m-0 p-0 uppercase text-center">Personal trainer</h3>
          <Image
            // loader={myLoader}
            src="/images/features.png"
            alt="features"
            width={500}
            height={400}
            className="m-0 p-0"
          />
        </Col>
    </Row>
  </Container>
  )
}
