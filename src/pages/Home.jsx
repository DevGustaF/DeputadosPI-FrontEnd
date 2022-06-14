import React from 'react'
import { Carousel, Image } from 'react-bootstrap'



const Home = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(35).webp"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(35).webp"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(35).webp"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </>
  )
}

export default Home