import Code from "../../Components/code/code"
import Response from "../../Components/code/response"



function Auth() {


let auth = [{
    name: "Log In",
    
    id: "logIn",
    req: "POST",
    endPoint: "app/v1/users/auth/login",
    description: (
      <span>
        You can add users by using the{" "}
        <span className="bg-black text-white py-1 px-2 rounded-sm">
          /users/auth/login
        </span>{" "}
        endpoint. And passing user data as JSON in body.
      </span>
    ),
    body:{
    "email": "test2@example.com",
    "password": "test1234"
  },
    response:{
    "status": "success",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YzllOTlmZTk5MmI1MDBjOTBkNzQ1ZSIsImlhdCI6MTY5MjExMjk4MSwiZXhwIjoxNjk5ODg4OTgxfQ.WeIvXpwfr0rUbDrW55FJRk81f2C0JcDZJRmGJM3kUQc"
}},
{
    name: "Get Profile With Session ",
    
    id: "getProfile",
    req: "GET",
    endPoint: "app/v1/users/auth/login",
    description: (
      <span>
        You can get the profile the current user with session if in the headers include the{" "}
        <span className="bg-black text-white py-1 px-2 rounded-sm">
          Authorization
        </span>{" "}
        key with the value 
        <span className="bg-black text-white py-1 px-2 rounded-sm">
          {"Bearer {your access token}"}
        </span> to 
        <span className="bg-black text-white py-1 px-2 rounded-sm">
          /auth/profile
        </span>
      </span>
    ),
    header:{
    "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YzllOTlmZTk5MmI1MDBjOTBkNzQ1ZSIsImlhdCI6MTY5MDk2MTAwMSwiZXhwIjoxNjk4NzM3MDAxfQ.ZVUdCYSQKJTWs-55l3hNu9f4jPYcdMIFHgCVBuVPvpg"
  },
    response:{
    "status": "success",
    "data": {
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
        "__v": 0,
        "photo": "https://cdn.pixabay.com/photo/2020/03/29/17/23/spiderman-4981530_1280.jpg"
    }
}}

]

  return (
    
    <div>
      <div
        id="auth"
        className="text-[3rem] text-gray-900 dark:text-slate-300 font-bold font-Roboto mt-5"
      >
        <span>Auth</span>
      </div>

      {auth.map((item) => (
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
          {item?.header ? (
            <div>
              <span className="text-[1rem] font-semibold font-Roboto mb-4">
                Header:
              </span>
              <Response data={item?.header} />
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
      <div className="text-[1rem] md:w-[90%] mt-2 font-normal dark:text-slate-300 text-gray-600 font-Roboto mt-3 mb-4">
            <span>Note : Token is valid for 90 days only.</span>
          </div>
      </div>
  )
}

export default Auth