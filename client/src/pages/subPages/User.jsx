
import Code from '../../Components/code/code'
import Response from '../../Components/code/response'

function User() {
  
let user = [
  {
    name: "Get All User",
    
    id: "getAllUser",
    req: "GET",
    endPoint: "app/v1/users",
    description: (
      <span>
        You can access the list more then 10 users by using the{" "}
        <span className="bg-black text-white py-1 px-2 rounded-sm">
          /users
        </span>{" "}
        endpoint
      </span>
    ),
    response:{
    "status": "success",
    "count": 2,
    "Data": [
        {
            "address": {
                "street": "123 Main Street",
                "city": "Anytown",
                "state": "Anystate",
                "postalCode": "12345",
                "country": "USA"
            },
            "_id": "64c9e431b3a6a1915d40f099",
            "name": "Iron Man",
            "email": "test@example.com",
            "photo": "https://cdn.pixabay.com/photo/2015/04/08/01/49/superhero-712060_1280.jpg"
        },
        {
            "address": {
                "street": "456 Elm Street",
                "city": "Othertown",
                "state": "Otherstate",
                "postalCode": "67890",
                "country": "USA"
            },
            "_id": "64c9e99fe992b500c90d745e",
            "name": "Spider Man",
            "email": "test2@example.com",
            "photo": "https://cdn.pixabay.com/photo/2020/03/29/17/23/spiderman-4981530_1280.jpg"
        }
    ]
}},
{
    name: "Get One User",
    
    id: "getOneUser",
    req: "GET",
    endPoint: "app/v1/users/64c9e431b3a6a1915d40f099",
    description: (
      <span>
        You can access the list more then 10 users by using the{" "}
        <span className="bg-black text-white py-1 px-2 rounded-sm">
          /users/{"<id>"}
        </span>{" "}
        endpoint
      </span>
    ),
    response:{
    "status": "success",
    
    "Data": [
        {
            "address": {
                "street": "123 Main Street",
                "city": "Anytown",
                "state": "Anystate",
                "postalCode": "12345",
                "country": "USA"
            },
            "_id": "64c9e431b3a6a1915d40f099",
            "name": "Iron Man",
            "email": "test@example.com",
            "photo": "https://cdn.pixabay.com/photo/2015/04/08/01/49/superhero-712060_1280.jpg"
        }
    ]
}},
{
    name: "Add user",
    
    id: "addUser",
    req: "POST",
    endPoint: "app/v1/users",
    description: (
      <span>
        You can add users by using the{" "}
        <span className="bg-black text-white py-1 px-2 rounded-sm">
          /users
        </span>{" "}
        endpoint. And passing user data as JSON in body.
      </span>
    ),
    body:{
    "name": "Alice Johnson",
    "email": "alicejohnson@example.com",
    "photo": "http://example.com/path/to/alicejohnson/photo.jpg",
    "password": "AliceJohnson123!",
    "cpassword": "AliceJohnson123!",
    "isAdmin":true,
    "address": {
      "street": "789 Oak Street",
      "city": "Sometown",
      "state": "Somestate",
      "postalCode": "54321",
      "country": "USA"
    },
    "phone": "555-555-5557"
    
  },
    response:{
    "status": "success",
    "data": {
        "id": "64dae8e9e71b28ca6a4c5265",
        "name": "Alice Johnson",
        "email": "alicejohnson@example.com",
        "password": "AliceJohnson123!",
        "address": {
            "street": "789 Oak Street",
            "city": "Sometown",
            "state": "Somestate",
            "postalCode": "54321",
            "country": "USA"
        },
        "photo": "http://example.com/path/to/alicejohnson/photo.jpg"
    }
}},
{
    name: "Update User",
    
    id: "updateUser",
    req: "PATCH",
    endPoint: "app/v1/users/64dae8e9e71b28ca6a4c5265",
    description: (
      <span>
        You can update users by using the{" "}
        <span className="bg-black text-white py-1 px-2 rounded-sm">
          /users/{"<id>"}
        </span>{" "}
        endpoint. And passing user data as JSON in body {"( You can only send those fields you wants to update   )"}.
      </span>
    ),
    body:{
    "name":"John Wick"
},
    response:{
    "status": "success",
    "data": {
        "id": "64dae8e9e71b28ca6a4c5265",
        "name": "John Wick",
        "email": "alicejohnson@example.com",
        "password": "AliceJohnson123!",
        "address": {
            "street": "789 Oak Street",
            "city": "Sometown",
            "state": "Somestate",
            "postalCode": "54321",
            "country": "USA"
        },
        "photo": "http://example.com/path/to/alicejohnson/photo.jpg"
    }
}},
{
    name: "Delete User",
    
    id: "deleteUser",
    req: "PATCH",
    endPoint: "app/v1/users/64dae8e9e71b28ca6a4c5265",
    description: (
      <span>
        You can delete users by using the{" "}
        <span className="bg-black text-white py-1 px-2 rounded-sm">
          /users/{"<id>"}
        </span>{" "}
        endpoint. And passing user data as JSON in body .
      </span>
    ),
    
    response:{
    "status": "success",
    "data": {
        "id": "64dae8e9e71b28ca6a4c5265",
        "name": "John Wick",
        "email": "alicejohnson@example.com",
        "password": "AliceJohnson123!",
        "address": {
            "street": "789 Oak Street",
            "city": "Sometown",
            "state": "Somestate",
            "postalCode": "54321",
            "country": "USA"
        },
        "photo": "http://example.com/path/to/alicejohnson/photo.jpg"
    }
}},
]
  return (
    <div>
      <div
        id="product"
        className="text-[3rem] text-gray-900 dark:text-slate-300 font-bold font-Roboto mt-5"
      >
        <span>User</span>
      </div>

      {user.map((item) => (
        <div key={item.id} id={item.id}>
          <div className="text-[2rem] text-gray-700 dark:text-slate-300 font-bold font-Roboto mt-5">
            <span>{item.name}</span>
          </div>
          <div className="text-[1rem] md:w-[90%] font-normal dark:text-slate-300 text-gray-600 font-Roboto mt-3 mb-4">
            <span>{item.description}</span>
          </div>
          <span className="text-[1.2rem] font-semibold font-Roboto mb-4">
            Request:
          </span>
          <Code req={item.req} endpoint={item.endPoint} />

          {item?.body ? (
            <div>
              <span className="text-[1rem] font-semibold font-Roboto mb-4">
                Body:
              </span>
              <Response data={item?.body} />
            </div>
          ) : (
            <></>
          )}
          <span className="text-[1.2rem] font-semibold font-Roboto mb-4">
            Response:
          </span>
          {item?.response ? <Response data={item?.response} /> : <></>}
        </div>
      ))}
      <div className="text-[1.5rem] md:w-[90%] mt-2 font-normal dark:text-slate-300 text-gray-600 font-Roboto mt-3 mb-4">
            <span>Note : For Deleting and Updating you have to create your own user.</span>
          </div>
      </div>
  )
}

export default User