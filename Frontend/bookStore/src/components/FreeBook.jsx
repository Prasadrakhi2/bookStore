import React from "react";
import Slider from "react-slick";
import list from "../../public/list.json";

//react slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";

const FreeBook = () => {
  const freeBook = list.filter((book) => book.category === "Free");

  //slider setting
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-2xl">Free Offered Courses</h1>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            pariatur soluta earum assumenda laboriosam quisquam doloribus, sit
            similique dolor alias molestias. Dolor omnis quos et. Eveniet
            voluptas deleniti ipsam eos!
          </p>
        </div>

        <div className="my-12">
          <Slider {...settings}>
            {freeBook.map((item) => {
              return <Card item={item} key={item.id} />;
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FreeBook;
