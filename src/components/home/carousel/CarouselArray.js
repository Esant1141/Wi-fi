import Carousel from 'react-bootstrap/Carousel';
import "./wel-car.css"
const carouselMenu = [
    "img/slide1.jpg",
    "img/slide2.jpg",
    "img/slide3.jpg",
    "img/slide4.jpg"
]
const carouselFunction = (item) => {
    return(
    <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src={item}
          alt="First slide"
        />
      </Carousel.Item>
)}
export const mainCarouselFun = carouselMenu.map(carouselFunction)