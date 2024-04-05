import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "𝐿𝑜𝓇𝑒𝓂 𝒾𝓅𝓈𝓊𝓂 𝒹𝑜𝓁𝑜𝓇 𝓈𝒾𝓉 𝒶𝓂𝑒𝓉 𝒸𝑜𝓃𝓈𝑒𝒸𝓉𝑒𝓉𝓊𝓇 𝒶𝒹𝒾𝓅𝒾𝓈𝒾𝒸𝒾𝓃𝑔 𝑒𝓁𝒾𝓉. 𝐸𝒶𝓆𝓊𝑒 𝓇𝑒𝒾𝒸𝒾𝑒𝓃𝒹𝒾𝓈 𝒾𝓃𝓋𝑒𝓃𝓉𝑜𝓇𝑒 𝒾𝓈𝓉𝑒 𝓇𝒶𝓉𝒾𝑜𝓃𝑒 𝑒𝓍 𝒶𝓁𝒾𝒶𝓈 𝓆𝓊𝒾𝓈 𝓂𝒶𝑔𝓃𝒾 𝒶𝓉 𝑜𝓅𝓉𝒾",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "𝐿𝑜𝓇𝑒𝓂 𝒾𝓅𝓈𝓊𝓂 𝒹𝑜𝓁𝑜𝓇 𝓈𝒾𝓉 𝒶𝓂𝑒𝓉 𝒸𝑜𝓃𝓈𝑒𝒸𝓉𝑒𝓉𝓊𝓇 𝒶𝒹𝒾𝓅𝒾𝓈𝒾𝒸𝒾𝓃𝑔 𝑒𝓁𝒾𝓉. 𝐸𝒶𝓆𝓊𝑒 𝓇𝑒𝒾𝒸𝒾𝑒𝓃𝒹𝒾𝓈 𝒾𝓃𝓋𝑒𝓃𝓉𝑜𝓇𝑒 𝒾𝓈𝓉𝑒 𝓇𝒶𝓉𝒾𝑜𝓃𝑒 𝑒𝓍 𝒶𝓁𝒾𝒶𝓈 𝓆𝓊𝒾𝓈 𝓂𝒶𝑔𝓃𝒾 𝒶𝓉 𝑜𝓅𝓉𝒾",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "𝐿𝑜𝓇𝑒𝓂 𝒾𝓅𝓈𝓊𝓂 𝒹𝑜𝓁𝑜𝓇 𝓈𝒾𝓉 𝒶𝓂𝑒𝓉 𝒸𝑜𝓃𝓈𝑒𝒸𝓉𝑒𝓉𝓊𝓇 𝒶𝒹𝒾𝓅𝒾𝓈𝒾𝒸𝒾𝓃𝑔 𝑒𝓁𝒾𝓉. 𝐸𝒶𝓆𝓊𝑒 𝓇𝑒𝒾𝒸𝒾𝑒𝓃𝒹𝒾𝓈 𝒾𝓃𝓋𝑒𝓃𝓉𝑜𝓇𝑒 𝒾𝓈𝓉𝑒 𝓇𝒶𝓉𝒾𝑜𝓃𝑒 𝑒𝓍 𝒶𝓁𝒾𝒶𝓈 𝓆𝓊𝒾𝓈 𝓂𝒶𝑔𝓃𝒾 𝒶𝓉 𝑜𝓅𝓉𝒾",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Sachin Tendulkar",
    text: "𝐿𝑜𝓇𝑒𝓂 𝒾𝓅𝓈𝓊𝓂 𝒹𝑜𝓁𝑜𝓇 𝓈𝒾𝓉 𝒶𝓂𝑒𝓉 𝒸𝑜𝓃𝓈𝑒𝒸𝓉𝑒𝓉𝓊𝓇 𝒶𝒹𝒾𝓅𝒾𝓈𝒾𝒸𝒾𝓃𝑔 𝑒𝓁𝒾𝓉. 𝐸𝒶𝓆𝓊𝑒 𝓇𝑒𝒾𝒸𝒾𝑒𝓃𝒹𝒾𝓈 𝒾𝓃𝓋𝑒𝓃𝓉𝑜𝓇𝑒 𝒾𝓈𝓉𝑒 𝓇𝒶𝓉𝒾𝑜𝓃𝑒 𝑒𝓍 𝒶𝓁𝒾𝒶𝓈 𝓆𝓊𝒾𝓈 𝓂𝒶𝑔𝓃𝒾 𝒶𝓉 𝑜𝓅𝓉𝒾",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
          𝐓𝐞𝐬𝐭𝐢𝐦𝐨𝐧𝐢𝐚𝐥𝐬
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
          𝐿𝑜𝓇𝑒𝓂 𝒾𝓅𝓈𝓊𝓂 𝒹𝑜𝓁𝑜𝓇 𝓈𝒾𝓉 𝒶𝓂𝑒𝓉 𝒸𝑜𝓃𝓈𝑒𝒸𝓉𝑒𝓉𝓊𝓇, 𝒶𝒹𝒾𝓅𝒾𝓈𝒾𝒸𝒾𝓃𝑔 𝑒𝓁𝒾𝓉. 𝒮𝒾𝓉
            𝒶𝓈𝓅𝑒𝓇𝒾𝑜𝓇𝑒𝓈 𝓂𝑜𝒹𝒾 𝒮𝒾𝓉 𝒶𝓈𝓅𝑒𝓇𝒾𝑜𝓇𝑒𝓈 𝓂𝑜𝒹𝒾
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;