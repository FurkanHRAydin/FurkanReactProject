import React from 'react'
import {MyProps} from '../props/MyProps'

const Humidity: React.FC<MyProps> = ({data}) => {
  return (
    <div className="humidity">
      {data.main ? <p className='bold'>{data.main.humidity} % </p> : null}
      <p>humidity</p>
    </div>
  )
}

export default Humidity