import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Products from './Components/Products/Products';
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from './Components/TopProducts/TopProducts';
import Banner from './Components/Banner/Banner';
import Subscribe from './Components/Subscribe/Subscribe';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';


const App = () => {

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
     <Navbar />
     <Hero />
     <Products/>
     <TopProducts/>
     <Banner/>
     <Subscribe />
     <Products />
     <Testimonials />
     <Footer />
    </div>
  )
}

export default App;
