import {Component} from 'react'
import Slider from 'react-slick'

import './index.css'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    }
    const {item} = this.props
    return (
      <div className="cont">
        <Slider className="sliderContainer" {...settings}>
          {item.map(each => (
            <MovieItem videoUrl={each.videoUrl} key={each.id} item={each} />
          ))}
        </Slider>
      </div>
    )
  }
}
export default SimpleSlider
