import React from "react";

interface CardData {
  id: number;
  image: string;
  title: string;
  description: string;
}

const cards: CardData[] = [
  {
    id: 1,
    image: "https://via.placeholder.com/160x120?text=Image+1",
    title: "Card One",
    description:
      "This is the description of card one. The image is on the left, text on the right.",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/160x120?text=Image+2",
    title: "Card Two",
    description:
      "This is the description of card two. The image is on the right, text on the left.",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/160x120?text=Image+3",
    title: "Card Three",
    description:
      "This is the description of card three. The image is on the left, text on the right.",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/160x120?text=Image+4",
    title: "Card Four",
    description:
      "This is the description of card four. The image is on the right, text on the left.",
  },
];

const ScrollableCards: React.FC = () => {
  return (
    <div className="scrollable-cards-container">
      {cards.map((card, idx) => {
        const imageOnLeft = idx % 2 === 0;
        return (
          <div key={card.id} className="card-row">
            {imageOnLeft && (
              <img
                src={card.image}
                alt={card.title}
                width={160}
                height={120}
                className="card-image"
              />
            )}
            <div className="card-text">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </div>
            {!imageOnLeft && (
              <img
                src={card.image}
                alt={card.title}
                width={160}
                height={120}
                className="card-image"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ScrollableCards;
