import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styled from 'styled-components'

const style = {
  VideoBox: styled.video`
    height: 400px;
    width: 600px;
  `,
}
class Home extends Component {

  componentWillMount() {
    this.setState({ srcObject: null })
  }

  componentDidMount() {
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
    if (navigator.getUserMedia) {
        navigator.getUserMedia({video: true}, this.handleVideo.bind(this), this.videoError.bind(this));
    }
  }

  handleVideo(stream) {
    this.setState({ videoSrc: window.URL.createObjectURL(stream) });
  }

  videoError(err) {
    console.error(err)
  }

  render() {
    return (
      <div>
        <style.VideoBox autoPlay src={this.state.videoSrc}>
        </style.VideoBox>
      </div>
    )
  }
}

export default connect()(Home)