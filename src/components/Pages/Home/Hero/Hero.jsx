
const Hero = () => {
  return (
    

  
 <div className='relative flex flex-col  justify-center h-155   max-w-3xl  px-8 gap-7  bg-[url(leafs.jpg)] bg-no-repeat bg-contain bg-center mt-35 mb-15'>
   <div className="absolute inset-0 bg-[#216e40] mix-blend-multiply rounded-xl shadow-3xl"></div>
    <div className='relative flex flex-col  justify-center h-195   max-w-3xl  px-8 gap-7 backdrop-blur-[1px] ' > 
    

      <div className='flex flex-col gap-3   rounded-xl p-5' >
        <h1 className=" font-bold text-center  potta-one text-white text-2xl sm:text-3xl md:text-5xl xl:text-5xl ">AI Generated  </h1>
        <h1 className=" font-bold text-center  potta-one text-white text-2xl   sm:text-3xl md:text-5xl xl:text-5xl">Delicious Recipe&apos;s </h1>
      </div>
       
        <p className="text-center text-[10px] md:text-sm xl:text-lg text-white">Your personal digital cookbook! Add your favorite ingredients, craft unique recipes, and explore endless culinary possibilities..</p>

        <div className='border h-13 md:h-18 flex items-center  bg-white gap-3 p-4 rounded-4xl '>
            <input type="text" placeholder=" Enter Ingredients to generate recipe " className='flex  grow w-5/7 h-8 md:h-13 focus:outline-none text-[10px] md:text-sm '/>
            <a href="/createRecipe2" className='border flex items-center grow w-2/7 rounded-4xl justify-center h-8 md:h-13 font-semibold  bg-[#ffc857]  border-black hover:bg-[#996a0a] text-xs md:text-md'>Create</a>
        </div>


        <div className='flex  gap-5 items-center'>
            <a href="/recipes2" className='border flex items-center grow  rounded-4xl justify-center h-9 sm:h-13 font-semibold text-[#013712]  bg-[#E6FF94]  hover:bg-green-900 hover:text-white border-black   w-9/24 text-xs sm:text-lg '>Discover Recipes</a>
            <a href="/Auth2" className='border flex items-center grow  rounded-4xl justify-center h-9 sm:h-13 font-semibold text-[#013712]   bg-[#E6FF94]  hover:bg-green-900 hover:text-white   border-black w-11/24 text-xs sm:text-lg '>Create a Free Account</a>
        </div>
        
      </div>
      </div>
  

 

 
  )
}

export default Hero

