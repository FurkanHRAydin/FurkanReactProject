import React from 'react'
import {MyProps} from '../props/MyProps'

const Wind: React.FC<MyProps>= ({data}) => {
  return (
    <div className="wind">
    {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} m/s</p>  : null}
    <p>Wind speed</p>
    </div>
  )
}

export default Wind