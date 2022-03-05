/* eslint-disable @next/next/no-img-element */
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function SliderBook() {
  const page = [
    'page-1.jpg',
    'page-2.jpg',
    'page-3.jpg',
    'page-4.jpg',
    'page-5.jpg',
    'page-6.jpg',
  ]

  //  open image if slider is clicked
  const openImage = (e) => {
    const image = e.target.src
    window.open(image, '_blank')
  }

  return (
    <Slider
      dots={true}
      speed={500}
      arrows={true}
      infinite={true}
      slidesToShow={1}
      className="w-full"
      slidesToScroll={1}
      focusOnSelect={false}
    >
      {page.map((item, index) => {
        return (
          <div
            className=" cursor-zoom-in w-1/3"
            key={index}
            onClick={openImage}
          >
            <img
              className="object-contain mx-auto"
              src={`/page/${item}`}
              width={346}
              height={490}
              alt={item}
            />
          </div>
        )
      })}
    </Slider>
  )
}
