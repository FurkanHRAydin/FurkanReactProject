import React, {useState} from 'react'
import Top from './Top';
import Bottom from './Bottom';
import {MyProps} from '../props/MyProps'

const Container: React.FC<MyProps>= ({data}) => {

    

  return (
    <div>
        {data.name &&(
            <div className='container'>
                <Top data={data}/>
                <Bottom data={data}/>
            </div>
        )}
    </div>
  )
    
    
}

export default Container