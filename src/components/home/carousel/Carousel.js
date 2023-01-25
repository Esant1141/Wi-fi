import Carousel from 'react-bootstrap/Carousel';
import { mainCarouselFun } from './CarouselArray';

function CarouselFade() {
  return (
    <Carousel fade>
      {mainCarouselFun}
    </Carousel>
  );
}
export default CarouselFade;