import React from 'react'
import {MyProps} from '../props/MyProps'

const Temp: React.FC<MyProps>= ({data}) => {
  return (
    <div className="temp">
      {data.main ? <h1>{data.main.temp.toFixed()} °C</h1> : null}
    </div>
  )
}

export default Temp