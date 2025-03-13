import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Card {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
}

interface CardStackProps {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}

export const CardStack: React.FC<CardStackProps> = ({ items, offset = 10, scaleFactor = 0.06 }) => {
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-60 w-60 md:h-60 md:w-96">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute bg-white h-60 w-60 md:h-60 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 flex flex-col justify-between"
          style={{ transformOrigin: "top center" }}
          animate={{
            top: index * -offset,
            scale: 1 - index * scaleFactor,
            zIndex: cards.length - index,
          }}
        >
          <div className="text-neutral-700">{card.content}</div>
          <div>
            <p className="text-neutral-500 font-medium">{card.name}</p>
            <p className="text-neutral-400">{card.designation}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};