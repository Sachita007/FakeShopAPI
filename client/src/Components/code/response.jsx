

let data = [
  {
    "id": 4,
    "title": "Handmade Fresh Table",
    "price": 687,
    "description": "Andy shoes are designed to keeping in...",
    "category": {
      "id": 5,
      "name": "Others",
      "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
    },
    "images": [
      "https://placeimg.com/640/480/any?r=0.9178516507833767",
      "https://placeimg.com/640/480/any?r=0.9300320592588625",
      "https://placeimg.com/640/480/any?r=0.8807778235430017"
    ]
  }]
 


const Response =()=> {
  return (
    <div className=" bg-black overflow-x-auto w-[90%] mt-3 mb-3  rounded-[8px] px-2 py-5">
      <span>
        <p className='text-white ml-2'><pre>{JSON.stringify(data, null, 2) }</pre></p>
      </span>
    </div>
  )
}

export default Response
