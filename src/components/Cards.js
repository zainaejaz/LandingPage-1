import React, { useState } from "react";
import logo1 from "../photos/MV LOGO -01.png";
import logo2 from "../photos/THE-HOURS-filled 2 1.png";
import logo3 from "../photos/Rectangle 24086.png";

const testimonials = [
  {
    id: 1,
    name: "Harshal Adarkar",
    title: "Founder & Director of Shellcode IT S...",
    companyLogo: logo1,
    text: "We were looking for Digital Marketing Services in Mumbai & we came across Digilligence. They're a team of young creative minds. Right from Logo Designing, Branding & Social Media Marketing, we found Digilligence to be one of Mumbai's Best Digital Marketing Agency.",
  },
  {
    id: 2,
    name: "Gaurav Randive",
    title: "Founder of TheHours",
    companyLogo: logo2,
    text: "Our Startup TheHours has had a wonderful relationship with Digilligence. We started with them by designing our app with Digi's UX/UI team working on the user experience & user interface. Soon after our app was live, we opted for their digital marketing services and it has given us great brand awareness till now.",
  },
  {
    id: 3,
    name: "Emily Johnson",
    title: "COO of NextGen",
    companyLogo: logo3,
    text: "Digilligence's expertise and coordination are truly impressive. They transformed our system into a sleek, user-friendly experience, which greatly enhanced our operations. Their team was always available to address concerns and provide support.",
  },
  {
    id: 4,
    name: "Alice Brown",
    title: "CEO of Alpha Inc.",
    companyLogo: "path/to/alpha-logo.png",
    text: "Working with Digilligence has been a fantastic experience. Their team is knowledgeable, efficient, and always ready to help. They have significantly improved our brand presence online.",
  },
  {
    id: 5,
    name: "Bob Smith",
    title: "Marketing Head of Beta Corp.",
    companyLogo: "path/to/beta-logo.png",
    text: "Digilligence has a team of professionals who deliver results. Their digital marketing strategies are top-notch, and we've seen a great increase in our online engagement.",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const getTransformValue = () => {
    if (window.innerWidth >= 768) {
      return `translateX(-${currentIndex * (100 / 3)}%)`;
    } else {
      return `translateX(-${currentIndex * 100}%)`;
    }
  };

  return (
    <div className="h-[555px] sm:h-[465px] relative bg-basic bg-cover bg-center">
      <div className="max-w-6xl mx-auto pt-8 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold ml-0 max-xl:ml-[25px]">
            Hear it from our clients
          </h2>
          <div className="flex space-x-2 mr-0 max-xl:mr-[20px]">
            <button
              onClick={prevSlide}
              className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: getTransformValue() }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="w-full md:w-1/3 flex-shrink-0 px-4"
              >
                <div
                  className={`max-sm:h-[400px] h-[350px] lg:h-[310px] p-6 ${
                    index === currentIndex
                      ? "bg-orange-500 text-white"
                      : "bg-white text-black"
                  } rounded-lg shadow-lg`}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={testimonial.companyLogo}
                      alt={`${testimonial.name} logo`}
                      className="w-16 h-16 rounded-full bg-white p-2"
                    />
                    <div>
                      <h3
                        className={`${
                          index === currentIndex
                            ? "text-white"
                            : "text-orange-500"
                        } text-xl font-bold`}
                      >
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-black">{testimonial.title}</p>
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-25 rounded-md shadow-inner leading-[23px] h-[265px] sm:h-[180px] p-4 flex items-center justify-center">
                    <p className="text-black text-left p-e2 text-base sm:text-sm md:text-xs overflow-hidden">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
