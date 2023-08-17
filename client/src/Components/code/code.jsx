

const code =(props)=> {
  const base = `http://fake-shop-api.ap-south-1.elasticbeanstalk.com/${props.endpoint}`
  return (
    
    <div className=" bg-black overflow-x-auto w-[90%] mt-3 mb-3 rounded-[8px] p-[1rem]  ">
      <span>
        <code className='text-white  '><pre> {props.req?`[${props.req}] ${base}`:base }</pre></code>
      </span>
    </div>
  )
}

export default code