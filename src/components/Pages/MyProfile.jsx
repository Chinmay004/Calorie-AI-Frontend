import  { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import Logout from "../auth/Logout";

const API_URL = import.meta.env.VITE_API_URL;


const MyProfile = () => {
    const [userData, setUserData] = useState(null);
    const auth = getAuth();
    const user = auth.currentUser;

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user) return;
      try {
        const response = await fetch(`${API_URL}/api/users/${user.uid}`);
        if (!response.ok) throw new Error("Failed to fetch user data");
        const data = await response.json();
        setUserData(data);
       
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, [user]);


    if (!userData) {
    return <p>Loading...</p>;

  }

  return (
   
   <div className="bg-[#BAD4b5] w-full min-h-screen  flex justify-center items-center  ">
                   

    <div className="bg-[#BAD4b5] w-full min-h-screen  flex justify-center items-center  ">
        <div className="   w-full flex justify-center items-center p-10 ">
            <div className=" relative  h-fit border w-full sm:w-2/3 md:w-3/5 lg:w-2/7 xl:w-3/10 rounded-xl  bg-[url('leafs.jpg')] bg-no-repeat bg-contain bg-center ">
                <div className="absolute inset-0 bg-[#82a060] mix-blend-multiply rounded-xl shadow-3xl"></div>

                <div className="relative z-10 flex flex-col gap-5 p-10 "> 
                    <a href="/" className="underline text-white text-xs">  Back to Home Page</a>   

                    <h1 className="text-3xl text-white  flex justify-center mb-5 font-semibold">My Profile </h1>
                    <div className=" flex flex-col gap-5 items-center ">
                    <div>
                        <input  type="text"  placeholder="Name" value={userData.name}  disabled   className="h-8 bg-white border rounded-xl  px-5 py-1 text-xs font-medium focus:outline-none " />
                    </div>

                    <div>
                        <input disabled type="email"  placeholder="Email" value={userData.email}   className="w-60 h-9 bg-white border rounded-xl  px-5 py-1 text-xs font-medium focus:outline-none  " />
                    </div>
                        
                       
                    </div>
                    <div  className="bg-[#ffc857] w-40 rounded-xl h-9 mb-3 font-semibold text-sm place-self-center flex justify-center itmes-center "> <Logout/></div>
                                         
                                       </div>
                                   </div>
                               </div>                              
                           </div>    
               </div>

  );
};

export default MyProfile;

