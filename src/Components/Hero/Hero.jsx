import React from 'react';
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";

const ImageList=[
    {
        id:1,
        img: Image1,
        title: "Upto 50% off on all Men's Wear",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
    {
        id:1,
        img: Image2,
        title: "Upto 20% off on all Men's Wear",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
    {
        id:1,
        img: Image3,
        title: "Upto 70% off on all Men's Wear",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
]

const Hero = () => {

  var settings={
    dots:false,
    arrows:false,
    Infinity:true,
    speed:800,
    slidesToScroll:1,
    autoplaySpeed:4000,
    cssEase:"ease-in-out",
    pauseOnHover:false,
    PauseOnFocus:true,
  };

  return (
    <div className='relative overflow-hidden min-h-[550px] 
    sm:min-h-[650px] bg-gray-300
    flex justify-center items-center 
    dark:bg-gray-950 dark:text-white duration-200'>
        {/* HERO SECTION BACKGROUND */}
      <div className='h-[700px] w-[700px] bg-primary/40 
      absolute 
      -top-1/2 right-0 rounded-3xl rotate-45 -z-9'>

      </div>

      {/*HERO SECTION */}
      <div className='container pb-8 sm:pb-0'>
       {/* <Slider> */}
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
                {/* Text and paragrah section */}
                  <div
                    className='flex flex-col 
                    justify-center gap-4 pt-12 
                    sm:pt-0 text-center sm:text-left order-2 
                    sm:order-1 relative z-10'
                  >
                    <h1 
                    data-aos="zoom-in" data-aos-duration="500" data-aos-once="true"
                     className='text-5xl 
                    sm:text-6xl lg:text-7xl font-bold'>Lorem ipusm dolor sit.</h1>

                    <p data-aos="zoom-in" data-aos-duration="500" data-aos-once="true" className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Eius, exercitationem? Ipsa, nisi expedita sed tenetur 
                        molestias obcaecati quidem pariatur? Optio, ipsum. Consectetur 
                        libero fuga eius eligendi. Suscipit a quasi quo?
                        </p>  
                    <div data-aos="zoom-in" data-aos-duration="500" data-aos-once="true">
                        <button className='bg-gradient-to-r 
                        from-primary to-secondary 
                        hover:scale-105 duration-200 
                        text-white py-2 px-4 rounded-full'>
                            Order Now
                            </button>
                    </div>
                  </div>

                {/* IMAGE section */}
             <div className='order-1 sm:order-2'>
                <div data-aos="zoom-in" data-aos-once="true" className='relative z-10'>
                    <img  src={Image1} alt='' 
                    className='w-[300px] 
                    h-[300px] sm:h-[450px] 
                    sm:w-[450px] 
                    sm:scale-105 lg:scale-120
                    object-contain mx-auto'
                    />
                </div>
             </div>
            </div>
        </div>
        {/* </Slider> */}
      </div>
    </div>
  );
};

export default Hero;


