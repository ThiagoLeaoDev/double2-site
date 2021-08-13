import * as SC from "./GalleryStyle"

export default function Gallery() {
  return (
    <SC.ContentGallery>
      <SC.LeftImages>
        <SC.BoxMiniImage>
          <SC.MiniImage src="/mao_bolso.jpg" layout='fill' objectFit="cover" quality={15}/>
        </SC.BoxMiniImage>
        <SC.BoxMiniImage>
          <SC.MiniImage src="/mao_bolso.jpg" layout='fill' objectFit="cover" quality={15}/>
        </SC.BoxMiniImage>
        <SC.BoxMiniImage>
          <SC.MiniImage src="/mao_bolso.jpg" layout='fill' objectFit="cover" quality={15}/>
        </SC.BoxMiniImage>
        <SC.BoxMiniImage>
          <SC.MiniImage src="/mao_bolso.jpg" layout='fill' objectFit="cover" quality={15}/>
        </SC.BoxMiniImage>
        <SC.BoxMiniImage>
          <SC.MiniImage src="/mao_bolso.jpg" layout='fill' objectFit="cover" quality={15}/>
        </SC.BoxMiniImage>
      </SC.LeftImages>
      <SC.FullImage>
        <SC.MiniImage src="/mao_bolso.jpg" layout='fill' objectFit="cover" quality={15}/>
      </SC.FullImage>
    </SC.ContentGallery>
  )
}