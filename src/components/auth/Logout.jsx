import { auth } from '../../lib/firebase';
import {signOut} from "firebase/auth";

const Logout = () => {

    const handleLogout = () =>{
       signOut(auth)
        .then(() =>{
            console.log("user Signed Out")
        }).catch((err)=>{
            console.error("Error Signing out: ",err)
        })

        
    }

  return (
            <button onClick={handleLogout}>Logout</button>
  )
}

export default Logout;