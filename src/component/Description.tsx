import React from 'react'
import {MyProps} from '../props/MyProps'

const Description: React.FC<MyProps>= ({data})=> {
  return (
    <div className="description">
      {data.weather ? <p>{data.weather[0].main}</p> : null}
    </div>
  )
}

export default Description