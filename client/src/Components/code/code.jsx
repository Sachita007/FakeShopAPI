import React from 'react'

const code =(props)=> {
  return (
    <div className=" bg-black overflow-x-auto w-[90%] mt-3 mb-3 rounded-[8px] p-[1rem]  ">
      <span>
        <code className='text-white  '><pre> {`[${props.req}] http://fake-shop-api.ap-south-1.elasticbeanstalk.com/${props.endpoint}`}</pre></code>
      </span>
    </div>
  )
}

export default code