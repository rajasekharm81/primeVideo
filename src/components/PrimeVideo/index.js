import {Component} from 'react'

import SimpleSlider from '../MoviesSlider'
import {PrimeVideoMainContainer} from './styledComponents'

import './index.css'

class PrimeVideo extends Component {
  state = {actionMovies: [], comedyMovies: []}

  componentDidMount() {
    this.spliter()
  }

  spliter = () => {
    const {moviesList} = this.props
    const actionMovies = moviesList.filter(each => each.categoryId === 'ACTION')
    const comedyMovies = moviesList.filter(each => each.categoryId === 'COMEDY')
    this.setState({actionMovies, comedyMovies})
  }

  render() {
    const {actionMovies, comedyMovies} = this.state
    return (
      <PrimeVideoMainContainer>
        <img
          className="primeVideo"
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
        />
        <h1 className="headingContainer">Action Movies</h1>
        <SimpleSlider item={actionMovies} />
        <h1 className="headingContainer">Comedy Movies</h1>
        <SimpleSlider item={comedyMovies} />
      </PrimeVideoMainContainer>
    )
  }
}

export default PrimeVideo
