import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";


const Hero2 = () => {
  return (

    <div className='h-screen  w-full  '>

      <div className='  w-full bg-[#FFFDF5] flex flex-col sm:flex-row justify-around items-center j   '>

        <div className='flex flex-col   h-fit  p-5 justify-between gap-10'>
          <div className='flex flex-col lg:gap-3 text-center md:text-start'>
            <h1 className=" font-bold   text-[#013712] text-2xl md:text-3xl lg:text-5xl ">Your Ingredients, Our AI  </h1>
            <h1 className=" font-bold   text-[#013712] text-2xl md:text-3xl lg:text-5xl ">Perfect Recipes  </h1>
            <h1 className=" font-bold   text-[#013712] text-2xl md:text-3xl lg:text-5xl ">In Seconds!  </h1>
          </div>

          <div className=' text-xs sm:text-lg text-[#013712] text-ellipsis mx-10 md:mx-0'>Just enter the ingredients you have,and our AI will generate a delicious recipe instantly!</div>

          <div>
          <ul className="list-disc list-inside mt-3 text-gray-700 xl:text-lg grid  font-semibold gap-3 justify-center md:justify-start ">
            <li className='flex gap-5  items-center '><IoIosCheckmarkCircle size={25} className='text-[#216e40]' />Generate AI-Powered Recipes</li>
            <li className='flex gap-5  items-center '><IoIosCheckmarkCircle size={25} className='text-[#216e40]' />Personalized Meal Suggestions</li>
            <li className='flex gap-5  items-center '><IoIosCheckmarkCircle size={25} className='text-[#216e40]' />Explore Global Cuisines</li>
            <li className='flex gap-5  items-center '><IoIosCheckmarkCircle size={25} className='text-[#216e40]' />Save and Share Recipes</li>
          </ul>
          </div>
        </div>

        <img src="/Dishes.png" alt="image" className=' size-max  sm:size-1/4 flex place-self-center  my-20 rounded-3xl'/>

        
      </div>

      


       <div className='relative flex-col h-fit w-full flex justify-top  items-center  py-10 gap-10  '> 
        <div className="absolute inset-0 bg-green-900 mix-blend-multiply rounded-xl shadow-3xl"></div>



        <div className=' relative z-10 w-10/12 lg:w-8/12  h-full lg:h-13/14 bg-[#ebfadb]  text-center  p-10 text-[#013712] gap-5 flex-col flex rounded-xl justify-around items-center '> 
          <div className=' text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight '>Spice It Up! <br></br>Discover New <br></br>Flavors Every Day!</div>
          <div className='lg:text-xl'>Join our community and explore a world of delicious recipes tailored just for you</div>

          <a href="/recipes2" className='relative z-10 border flex items-center text-center   bg-[#ffc857]  border-black hover:bg-[#996a0a]  rounded-xl justify-center h-25  font-semibold   w-12/24 md:w-8/24 text-md sm:text-lg '>Join Our <br></br> Community</a>

        </div>
        
       

      </div>

      <div className=' h-fit w-full  text-[#013712] flex flex-col justify-beteween items-center mt-10'>
        <div className='  p-5 font-bold  text-3xl sm:text-4xl '>Unlock Culinary Activity</div>
          <div className='grid grid-cols-1 lg:grid-cols-2  wrap w-2/3  justify-items-center gap-10 h-fit py-10   ' >


            <div className='w-full p-5  flex flex-col gap-3 items-center bg-white rounded-2xl '>
              <img src="/Cuisines2.jpeg" alt="" className='size-56 rounded-xl place-self-center'/>
              <h2 className='font-semibold text-lg text-center'>Explore Global Cuisines</h2>
              <span className='text-sm text-center font-medium'>Choose from a variety of cuisines like Italian, Mexican, Indian, and more.</span>
            </div>


            <div className='w-full p-5 bg-white  flex flex-col gap-3 items-center rounded-2xl '>
              <img src="/DietaryTags.jpeg" alt="" className='size-56 rounded-xl place-self-center'/>
              <h2 className='font-semibold text-lg'>Dietary Tags</h2>
              <span className='text-sm text-center font-medium'>Select dietary Preferences such as Vegan, Gluten-Free and Keto.</span>
            </div>


            <div className='w-full p-5 bg-white rounded-2xl  flex flex-col gap-3 items-center '>
              <img src="/DishTypes.jpeg" alt="" className='size-56 rounded-xl place-self-center'/>
              <h2 className='font-semibold text-lg text-center'>Dish Types</h2>
              <span className='text-sm text-center font-medium'>Find recipes categorized by Appetizer, Main Course, Dessert and More.</span>
            </div>


            <div className='w-full p-5 bg-white rounded-2xl  flex flex-col gap-3 items-center '>
              <img src="/Nutrition.png" alt="" className='size-56 rounded-xl place-self-center'/>
              <h2 className='font-semibold text-lg'>Nutrition Information</h2>
              <span className='text-sm text-center font-medium'>Detailed insights on Calories, Protein, Carbs, and fats.</span>
            </div>

            
          </div>
      </div>

     

     

     
      {/* <footer className='flex flex-col h-1/2 bg-[#1D2C22]'>
       <div className=''>
        Calorie AI
       </div>

      </footer> */}


<footer className="bg-green-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 ">
        
        {/* Logo & About */}
        <div className=''>
          <h2 className="text-2xl font-bold">Calorie AI</h2>
          <p className="mt-2 text-sm">
            Your AI-powered digital cookbook for<br></br> personalized recipes and nutrition insights.
          </p>
        </div>

       
        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-white text-blue-600 rounded-full hover:bg-yellow-500 hover:text-white transition">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="p-2 bg-white text-blue-400 rounded-full hover:bg-yellow-500 hover:text-white transition">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="p-2 bg-white text-pink-600 rounded-full hover:bg-yellow-500 hover:text-white transition">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="p-2 bg-white text-blue-700 rounded-full hover:bg-yellow-500 hover:text-white transition">
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className=''>
          <h3 className="text-lg font-semibold mb-2">Subscribe</h3>
          <p className="text-sm">Get the latest AI-generated<br></br> recipes straight to your inbox!</p>
          <div className="mt-3 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full rounded-l text-gray-900 bg-white"
            />
            <button className="bg-yellow-500 px-4 py-2 rounded-r">Subscribe</button>
          </div>
        </div>

      </div>

      {/* Copyright Section */}
      <div className="text-center mt-6 text-sm border-t border-gray-600 pt-4 ">
        <p>
          &copy; {new Date().getFullYear()} Calorie AI. All Rights Reserved. |
          <a href="#" className="hover:underline"> Privacy Policy</a> |
          <a href="#" className="hover:underline"> Terms of Service</a>
        </p>
      </div>
    </footer>


    </div>



  )
}

export default Hero2