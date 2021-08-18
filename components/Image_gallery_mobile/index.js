import {useState} from "react";
import Carousel from 'nuka-carousel';

import * as SC from "./GalleryMobileStyle"

export default function GalleryMobile(props) {

  return (
    <SC.ContentGallery>
      <Carousel   renderCenterLeftControls={false}  renderCenterRightControls={false}>
        {
          props.passImage.map((source, index) => {
            return(
              <SC.BoxImage>
                <SC.ImageMobile src={source} layout='fill' objectFit="cover" quality={100} key={index}/>
              </SC.BoxImage>
            )
          })
        }
      </Carousel>
    </SC.ContentGallery>
  )
}