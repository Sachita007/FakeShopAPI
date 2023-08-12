
import Code from '../code/code'
import Response from '../code/response'

const DocArea=()=> {
  return (
    <div >
        <div className="text-[3rem] text-gray-700 dark:text-slate-300 font-bold font-Roboto mt-5"><span>Product</span></div>
        <div className="text-[2rem] text-gray-700 dark:text-slate-300 font-bold font-Roboto mt-5"><span>Get All Product</span></div>
        <div className="text-[1rem] font-normal dark:text-slate-300 text-gray-600 font-Roboto mt-3 mb-4"><span>You can access the list of 200 products by using the <span className='bg-black text-white py-1 px-2 rounded-sm'>/products</span> endpoint.</span></div>
        <span className='text-[1.2rem] font-semibold font-Roboto mb-4'>Request:</span>
        <Code />
        <span className='text-[1.2rem] font-semibold font-Roboto mb-4'>Response:</span>
        <Response />
    </div>
  )
}

export default DocArea
