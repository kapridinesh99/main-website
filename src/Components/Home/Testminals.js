import React, { useEffect, useState } from "react";
import { ss1,ss2,ss3,ss4 } from "../../Assets/index";
import "./Home.css"
const initialImages = [
  {
    img: ss1,
    name: "Sunder Rawat",
    desc: "Real Values has consistently delivered exceptional returns on investment, making them the top choice for savvy investors. Their superb commission structure only adds to the allure, making it a truly rewarding partnership.",
  },
  {
    img: ss2,
    name: "Preeti Kumari",
    desc: "Real Values stands out in the financial world, offering unparalleled returns and an extraordinary commission system that truly sets them apart",
  },
  {
    img: ss3,
    name: "Utkarsh Singh",
    desc: "Real Values stands out in the financial world, offering unparalleled returns and an extraordinary commission system that truly sets them apart",
  },
  {
    img: ss4,
    name: "Hari Kumar Sharma",
    desc: "Real Values redefines excellence in investment. With their impressive returns and unbeatable commission structure, they've earned my trust and loyalty.",
  }
];

const Testmonials = () => {
  const [images] = useState(initialImages);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      moveItems();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const moveItems = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  const handleItemClick = (index) => {
    setCurrentIndex(index);
  };

  const getCircularIndex = (index, length) => {
    return (index + length) % length;
  };

  return (
    <div className="carousel-container mt-10 h-full">
      <div className="flex flex-col justify-center gap-10 text-center">
        <div className="bg-[#000000] w-screen h-32 flex align-center justify-center">
          <h1 className="text-3xl font-bold text-white">Success Stories</h1>
        </div>
        <div className="carousel-items">
          {Array(5)
            .fill()
            .map((_, index) => {
              const imageItem =
                images[
                  getCircularIndex(currentIndex + index - 2, images.length)
                ];
              return (
                <div
                  key={index}
                  className={`${index === 2 ? "sm:center" : "opacity"} ${
                    (index === 0 || index === 4) &&
                    "sm:hidden md:block lg:block"
                  } ${
                    (index === 1 || index === 3) &&
                    "sm:hidden md:block lg:block"
                  }`}
                  onClick={() =>
                    handleItemClick(
                      getCircularIndex(currentIndex + index - 2, images.length)
                    )
                  }>
                  <img
                    className="sm:h-44 h-26 mx-5 sm:w-48 w-40 rounded-md"
                    src={imageItem.img}
                    alt="item"
                  />
                </div>
              );
            })}
        </div>
        <div className="flex flex-col gap-5">
          <p>
            <b className="text-2xl font-bold text-black">
              {images[currentIndex].name}
            </b>
          </p>
          <div className="ss-class">
            <p className="text-xl font-thin text-black">
              {images[currentIndex].desc}
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Testmonials;
