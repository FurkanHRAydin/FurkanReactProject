import React from 'react'
import Temp from './Temp'
import Description from './Description'
import Location from './Location'
import {MyProps} from '../props/MyProps'

const Top: React.FC<MyProps>= ({data}) => {
  return (
      <div className='top'>
        <Temp data={data}/>
        <Description data={data}/>
        <Location data={data}/>
      </div>
  )
}

export default Top