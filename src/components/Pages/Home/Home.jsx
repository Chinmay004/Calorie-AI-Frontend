import Navbar from '../../layout/Navbar';
import Hero from './Hero/Hero';
import Hero2 from './Hero/Hero2';

const Home = () => {
  return (
    <div className=" min-h-screen bg-primary-light justify-items-center  ">
      
      <Navbar/>
      <Hero/>
      <Hero2/>
    
      
      
    </div>
  );
}

export default Home;