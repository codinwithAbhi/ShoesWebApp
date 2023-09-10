import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import  Images  from '../Constand';
import { Container } from 'react-bootstrap';

const Home=()=> {
 
  return (
    <Container className='p-3 '>
    <Carousel className='flex' style={{backgroundColor: "blanchedalmond",width:"100%",height:"600px"}}>
      <Carousel.Item interval={1000}>
        <img style={{height:"650px"}}
          className="d-block w-100"
          src={Images.c1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img style={{height:"590px"}}
          className="d-block w-100"
          src={Images.i7} 
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"650px"}}
          className="d-block w-100"
          src={Images.c3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
  );
}

export default Home;