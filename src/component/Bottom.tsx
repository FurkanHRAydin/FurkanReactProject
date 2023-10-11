import React from 'react'
import Wind from './Wind';
import Feels from './Feels';
import Humidity from './Humidity';
import {MyProps} from '../props/MyProps'

const Bottom:  React.FC<MyProps> = ({data})  => {
  return (
    <div className='bottom'>
      <Feels data={data}/>
      <Humidity data={data}/>
      <Wind data={data}/>
    </div>
  )
}

export default Bottom