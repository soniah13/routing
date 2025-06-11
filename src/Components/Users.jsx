import { useState, useEffect } from 'react' 
import { useParams } from 'react-router-dom'

function Users() {
    const {userId} = useParams()
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => response.json())
        .then((data) => setUser(data))
        
        
        .catch((error) => console.log(error, "error occured"))
           
    },[userId])

    if(!user) {
        return <h3>Loading user data...</h3>
    }

  return (
    <>
    <h1>my name is: {user.name}</h1>
    <p>my email address is {user.email}</p>
   <p> they call me {user.username}</p>
    

    </>
  )
}

export default Users