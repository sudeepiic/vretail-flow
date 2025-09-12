import React from "react";
import { cards } from "./data";

const CollabCards: React.FC = () => {
  return (
    <div className="w-full px-[10rem] mx-auto p-6 space-y-12">
      {cards.map((card, idx) => {
        const imageOnLeft = idx % 2 === 0;
        const descriptionPoints = card.description.split(". ").filter(Boolean);

        return (
          <div
            key={card.id}
            className="flex flex-col md:flex-row items-center justify-between bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100"
          >
            {imageOnLeft && (
              <div className="w-full md:w-1/2 flex items-center justify-center p-4">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-[300px] rounded-lg shadow-sm object-contain"
                />
              </div>
            )}

            <div className="w-full md:w-1/2 p-8 text-center md:text-left">
              <h3
                className="text-3xl font-bold mb-6 text-violet-700 
             bg-clip-text "
              >
                {card.title}
              </h3>
              <ul className="text-gray-900 text-lg leading-relaxed max-w-lg mx-auto md:mx-0 space-y-3">
                {descriptionPoints.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-violet-700 mr-3 mt-1">⦿</span>
                    <span>{point.trim()}</span>
                  </li>
                ))}
              </ul>
            </div>

            {!imageOnLeft && (
              <div className="w-full md:w-1/2 flex items-center justify-center p-6">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-[300px] rounded-xl shadow-sm object-contain"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CollabCards;
