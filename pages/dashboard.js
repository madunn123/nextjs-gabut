import Image from 'next/image';
import {
    Container,
} from 'react-bootstrap';
import Navbar from '../components/navbar';
import Features from '../components/features';
import About from '../components/about';
import Footer from '../components/footer';

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="background">
        {/* <Container fluid className="p-0" id="home">
          <Image 
            src="/images/banner.png"
            alt="banner"
            width="1350%"
            height={500}
            className="cover"
          />
        </Container> */}
        <Container fluid className="w-40">
          <Features />
          <About />
        </Container>
      </div>


      <Footer />
    </>
  );
}
