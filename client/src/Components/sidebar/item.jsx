

const item = (props)=> {
  return (
    <div className="mb-5   font-[Roboto] font-semibold "><a className='hover:text-cyan-500 text-[1.5rem] dark:text-slate-300 text-sky-900' href="https://github.com/Sachita007/FakeShopAPI/branches">{props.title}</a>
          <ul className=' ml-3 mt-2  text-[1.2rem]'>
            {
                props.array.map((link)=>(
                    <li className=" font-semibold mb-1 text-sky-600 text-[1.1rem]" key={link.name}><a className="hover:text-red-400" href={link.link}>{link.name}</a> 
                    <ul> 
                    {link?.subArr?.map((item)=>(
                        <li className=" hover:text-red-400 ml-3 text-[1rem] " key={item.name}><a href='/'>{item.name}</a> </li>
                     ))}</ul>
                    </li>
                    
                ))
            }
           
            
          </ul>
         </div>
  )
}

export default item