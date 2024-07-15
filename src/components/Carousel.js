import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image from "../photos/image 56.png";
import image1 from "../photos/58.png";
import image2 from "../photos/image 57.png";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function ProjectCarousel() {
  return (
    <div className="bg-stars h-[800px] sm:h-[720px]">
      <h2 className="text-center md:text-4xl text-white text-[46px] font-semibold font-['Clash Display'] pt-[80px] mb-[30px] sm:mb-[96px]">
        Take a look at the{" "}
        <span className="text-orange-500">latest projects</span> we’ve done.
      </h2>
      <div className="mx-auto w-full max-w-7xl mb-[113px]">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          showDots={true}
          arrows={true}
          className="carousel-wrapper"
        >
          {[image, image1, image2].map((project, index) => (
            <div key={index} className="relative px-4">
              <img
                src={project}
                alt={`Project ${index + 1}`}
                className="rounded-lg w-full w-[617px] h-[372px] object-cover"
              />
              <div
                className="absolute bottom-0 left-0 w-full p-4 rounded-b-lg text-white text-left"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0, 0, 10, 2), transparent)",
                }}
              >
                <h3 className="text-xl font-semibold pl-8">Project Name</h3>
                <p className="text-sm pl-8">Lorem ipsum rem ipsum orem ipsum</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default ProjectCarousel;
