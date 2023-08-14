
import Code from '../code/code'
import Response from '../code/response'

const DocArea=(props)=> {
  return (
    <div >
        {/* {console.log(props.docs)}
        <div className="text-[2rem] text-gray-700 dark:text-slate-300 font-bold font-Roboto mt-5"><span>{props.docs}</span></div>
        <div className="text-[1rem] font-normal dark:text-slate-300 text-gray-600 font-Roboto mt-3 mb-4"><span>{props.docs?.description}</span></div>
        <span className='text-[1.2rem] font-semibold font-Roboto mb-4'>Request:</span>
        <Code req={props.docs.req}  endpoint={props.docs.endpoint} />
        <span className='text-[1.2rem] font-semibold font-Roboto mb-4'>Response:</span>
        {props.docs?.response?<Response data={props.docs?.response} />:<></>}
         */}
        
    </div>
  )
}

export default DocArea
