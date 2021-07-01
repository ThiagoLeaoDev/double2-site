import Carousel from 'nuka-carousel';

import * as SC from "./SlideStyle";

import PreviousArrow from "../../public/circle_chevron_left.svg"
import NextArrow from "../../public/circle_chevron_right.svg"


export default function Slider() {
  return (
    <SC.Content>
      {/* <Carousel autoplay autoplayInterval={2000} wrapAround
      renderCenterLeftControls={({ previousSlide }) => (
        <SC.PrevImage src={PreviousArrow} alt="" onClick={previousSlide}/>
      )}
      renderCenterRightControls={({ nextSlide }) => (
        <SC.NextImage src={NextArrow} alt="" onClick={nextSlide}/>
      )}
      >*/}
        <SC.ContainerImage> 
          <SC.BannerImage src="/banner.png" layout="fill" objectFit="cover"/>
        </SC.ContainerImage>
      {/* </Carousel> */}
    </SC.Content>
  )
}
