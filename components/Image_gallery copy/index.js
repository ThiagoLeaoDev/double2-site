import {useState} from "react";

import * as SC from "./galleryStyle"

export default function Gallery(props) {
  const [modal, setModal] = useState(false);
  const [fullImage, setFullImage] = useState("/moletom_preto_3.jpg");


  return (
    <SC.ContentGallery>
      <SC.LeftImages>
        {
          props.passImage.map((source, index) => {
            return(
              <SC.BoxMiniImage onClick={() => setFullImage(source)} onLoad={() => setFullImage(props.passImage[0])}>
                <SC.MiniImage src={source} layout='fill' objectFit="cover" quality={100} key={index}/>
              </SC.BoxMiniImage>
            )
          })
        }
      </SC.LeftImages>
      <SC.FullImage onClick={() => setModal(true)}>
        <SC.MiniImage src={fullImage} layout='fill' objectFit="cover" quality={100}/>
      </SC.FullImage>
      {
        modal ? 
          <div>
            <SC.ModalArea onClick={() => setModal(false)}/>
            <SC.BoxModalImage>
              <SC.ModalImage src={fullImage} layout='fill' objectFit="cover" quality={100}/>
            </SC.BoxModalImage>
          </div>
        : null
      }
    </SC.ContentGallery>
  )
}