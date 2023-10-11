import React from 'react'
import {MyProps} from '../props/MyProps'

const Location: React.FC<MyProps>= ({data}) => {
  return (
    <div className='location'>
      <p>{data.name}</p>
    </div>
  )
}

export default Location