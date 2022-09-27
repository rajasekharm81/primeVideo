import {Component} from 'react'
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

class MovieItem extends Component {
  state = {videoUrl: ''}

  sendId = () => {
    const {videoUrl} = this.props
    this.setState({videoUrl})
    console.log(videoUrl)
  }

  render() {
    const {item} = this.props
    const {videoUrl} = this.state

    return (
      <div>
        <Popup
          trigger={
            <button className="ItemContainer" type="button">
              <img
                className="itemThumbnail"
                src={item.thumbnailUrl}
                alt="thumbnail"
                onClick={this.sendId}
              />
            </button>
          }
          modal
        >
          {close => (
            <div className="popupContainer">
              <button
                // testid="closeButton"
                type="button"
                className="PopupCloseButton"
                onClick={close}
              >
                <IoMdClose />
              </button>
              <ReactPlayer
                width="60vw"
                height="60vh"
                playing="true"
                controls="true"
                url={videoUrl}
              />
            </div>
          )}
        </Popup>
      </div>
    )
  }
}
export default MovieItem
