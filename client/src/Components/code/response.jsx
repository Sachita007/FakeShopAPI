




const Response =(props)=> {
  return (
    <div className=" bg-black overflow-x-auto w-[90%] mt-3 mb-3  rounded-[8px] px-2 py-5">
      <span>
        <code className='text-white ml-2'><pre>{JSON.stringify(props.data, null, 2) }</pre></code>
      </span>
    </div>
  )
}

export default Response
