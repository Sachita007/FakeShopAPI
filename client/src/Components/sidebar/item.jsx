import { Link } from "react-router-dom"


const item = (props)=> {
  return (
    <div className="mb-5   font-[Roboto] font-semibold "><Link className='hover:text-blue-500 dark:hover:text-blue-500 text-[1.5rem] dark:text-slate-100 ' to={`/docs/${props.title.toLowerCase()}`}>{props.title}</Link>
          <ul className=' ml-3 mt-2  text-[1.2rem]'>
            {
                props.array.map((link)=>(
                    <li className=" font-semibold mb-1 text-gray-600 dark:text-slate-300 text-[1.1rem]" key={link.name}><a className="hover:text-blue-400" href={`/docs/${props.title.toLowerCase()}${link.link}`}>{link.name}</a> 
                    <ul> 
                    {link?.subArr?.map((item)=>(
                        <li className=" hover:text-blue-400 ml-3 text-[1rem] " key={item.name}><a href={`/docs/${props.title.toLowerCase()}${item.link}`}>{item.name}</a> </li>
                     ))}</ul>
                    </li>
                    
                ))
            }
           
            
          </ul>
         </div>
  )
}

export default item