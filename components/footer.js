import Link from 'next/link';
import {
  Container, Row, Col,
} from 'react-bootstrap';
import {
  BsWhatsapp, BsInstagram, BsFacebook,
} from 'react-icons/bs';

export default function footer() {
  return (
    <Container fluid className="bg-dark text-white text-center pt-5 pb-3">
      <Row className="mb-5">
        <Col sm={12} md={8} className="m-auto">
          <h4 className="uppercase">My Contact</h4>
            <div className="d-block d-sm-flex justify-content-evenly">
              <Link href="https://www.instagram.com/ra.maaa7374/">
                <BsInstagram className="hover-txt-blue" size={100} />
              </Link>
              <Link href="https://web.facebook.com/profile.php?id=100066954433470">
                <BsFacebook className="hover-txt-blue" size={100} />
              </Link>
              <Link href="https://wa.me/083878857156">
                <BsWhatsapp className="hover-txt-blue" size={100} />
              </Link>
            </div>
        </Col>
      </Row>
      <h6 className="uppercase">
        &copy;ramadhan perkasa
      </h6>
    </Container>
  )
}
