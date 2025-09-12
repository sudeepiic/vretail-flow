import React from "react";
import { cards } from "./data";
import { CheckCircle } from "lucide-react";

const ScrollableCards: React.FC = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto p-4 space-y-16 my-12">
      {cards.map((card, idx) => {
        const imageOnLeft = idx % 2 === 0;
        return (
          <div
            key={card.id}
            className="relative flex flex-col md:flex-row items-center justify-between bg-white rounded-3xl shadow-md border border-indigo-100 overflow-hidden p-6 
                       hover:shadow-xl hover:-translate-y-1 hover:border-indigo-300 transition-all duration-300"
          >
            {/* Floating badge */}
            <div
              className={`absolute bottom-4 ${
                !imageOnLeft ? "left-4" : "right-4"
              } text-indigo-200/20 text-[14rem] font-extrabold leading-none pointer-events-none select-none z-1`}
            >
              {card.id}
            </div>
            {/* Image left */}
            {imageOnLeft && (
              <div className="w-full md:w-3/4 flex items-center justify-center ">
                <div className="w-full  h-[410px] flex items-center justify-center bg-indigo-50 rounded-2xl overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-contain object-center"
                  />
                </div>
              </div>
            )}

            {/* Content */}
            <div className="w-full md:w-1/2 p-8  text-center md:text-left z-5">
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">
                {card.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {card.description}
              </p>

              <ul className="space-y-3 text-base">
                {card.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-700 transition-all duration-300 hover:translate-x-1 hover:text-indigo-600"
                  >
                    <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image right */}
            {!imageOnLeft && (
              <div className="w-full md:w-3/4 flex items-center justify-center ">
                <div className="w-full  h-[410px] flex items-center justify-center bg-indigo-50 rounded-2xl overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-contain "
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ScrollableCards;
