import React from 'react';
import LeftComponent from './BodyComponents/LeftComponent';
import MiddleComponent from './BodyComponents/MiddleComponent/MiddleComponent';
import RightComponent from './BodyComponents/RightComponent';
import './Body.css'

const Body = () => {
  return (
    <div className='mainBody'>
      <LeftComponent/>
      <MiddleComponent/>
      <RightComponent/>
    </div>
  )
}

export default Body