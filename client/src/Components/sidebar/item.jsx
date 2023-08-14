import { Link } from "react-router-dom"

const item = (props)=> {
  return (
    <div className="mb-5   font-[Roboto] font-semibold "><Link className='hover:text-cyan-500 text-[1.5rem] dark:text-slate-300 text-sky-900' to={`/docs/${props.title.toLowerCase()}`}>{props.title}</Link>
          <ul className=' ml-3 mt-2  text-[1.2rem]'>
            {
                props.array.map((link)=>(
                    <li className=" font-semibold mb-1 text-sky-600 text-[1.1rem]" key={link.name}><a className="hover:text-red-400" href={`/docs/${props.title.toLowerCase()}${link.link}`}>{link.name}</a> 
                    <ul> 
                    {link?.subArr?.map((item)=>(
                        <li className=" hover:text-red-400 ml-3 text-[1rem] " key={item.name}><Link to={`/docs/${props.title.toLowerCase()}${item.link}`}>{item.name}</Link> </li>
                     ))}</ul>
                    </li>
                    
                ))
            }
           
            
          </ul>
         </div>
  )
}

export default item