// UncontrolledLottie.jsx
import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from '../../Lotties/27715-login-anim.json'
import classes from './lottieTest.module.css'

class LottieTest extends Component {


  render(){

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return(
      <div className={classes.lotties} >
        <h1>Lottie</h1>
        <p>Base animation free from external manipulation</p>
        <Lottie options={defaultOptions }
              height={400}
              width={400}
              background={'#3490dc'}
             
        />
      </div>
    )
  }
}

export default LottieTest