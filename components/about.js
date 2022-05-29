import Image from 'next/image';
import {
    Container, Row, Col, Card,
} from 'react-bootstrap';

export default function about() {
  return (
    <Container fluid className="py-5" id="about">
    <Row className="text-center">
      <Col sm={12} md={12} className="text-center">
        <h1>About</h1>
      </Col>
      <Col sm={12} md={3} className="py-3">
        <Card className="bg-card">
          <Card.Body className="p-0">
            <Image 
            src="/images/about.png"
            alt="about"
            width={400}
            height={400}
           />
         </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={3} className="py-3">
        <Card className="bg-card">
          <Card.Body className="p-0">
            <Image 
            src="/images/about1.png"
            alt="about"
            width={400}
            height={400}
           />
         </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={3} className="py-3">
        <Card className="bg-card">
          <Card.Body className="p-0">
            <Image 
            src="/images/about2.png"
            alt="about"
            width={400}
            height={400}
           />
         </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={3} className="py-3">
        <Card className="bg-card">
          <Card.Body className="p-0">
            <Image 
            src="/images/about3.png"
            alt="about"
            width={400}
            height={400}
           />
         </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={12}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci maiores doloribus repudiandae nemo, voluptates dignissimos corporis perferendis nisi commodi ad saepe cum alias explicabo harum, ipsa vitae excepturi cupiditate molestiae amet iste est eius nostrum! Blanditiis nihil hic atque officia, amet consequuntur porro fugit molestiae delectus id omnis iusto eum tempora nisi ipsam vero, aliquid distinctio corporis voluptatem explicabo cum excepturi facilis itaque pariatur. Delectus rem recusandae accusamus commodi unde tempora quam necessitatibus ex! Quam soluta labore cumque aspernatur nihil, quis possimus voluptatem ullam eaque accusamus adipisci error sint asperiores ipsam cupiditate numquam eius voluptas quaerat. Eos ducimus amet excepturi?</p>
      </Col>
    </Row>
  </Container>
  )
}
