import React, { createContext } from "react";
import { useState } from "react";
import { porsche, telsa, lambo, bugatti } from "../assets";

interface ContextProp {
  cars: CarItemProp[];
  addCar: (props: CarItemProp) => void;
  deleteCar: (id: string) => void;
}

export const StoreContext = createContext<ContextProp>({
  cars: [],
  addCar: () => {},
  deleteCar: () => {},
});

export const StoreProvider: React.FC = ({ children }) => {
  const [cars, setCars] = useState<CarItemProp[]>([
    {
      name: "Porsche Taycan",
      imgSrc: porsche,
      price: "$79,900",
      id: "1",
      brand: "Porsche",
      description:
        "The soul has many aspects. It is variable and constantly changing. When viewing the Porsche Taycan, it reveals itself by a smile that expresses total delight. Or by the urge for freedom at the wheel of the new Taycan Cross Turismo that holds its ground, even away from everyday life.",
    },
    {
      name: "Tesla Model 3",
      imgSrc: telsa,
      price: "$48,490",
      id: "2",
      brand: "Tesla",
      description:
        "Model 3 comes with the option of dual motor all-wheel drive, 20” Überturbine Wheels and Performance Brakes and lowered suspension for total control, in all weather conditions. And a carbon fiber spoiler improves stability at high speeds, all allowing Model 3 to accelerate from 0-60 mph* in as little as 3.1 seconds.",
    },
    {
      name: "Lamborghini Aventador",
      imgSrc: lambo,
      price: "$393,695",
      id: "3",
      brand: "Lamborghini",
      description:
        "The Aventador Coupé has been engineered to revolutionize this concept and establish a new benchmark in the segment of super sports cars and beyond. This car aims to bring the future forward. This is a true supercar legend in the making, which combines the tradition of the Lamborghini brand with a level of innovation which takes the House of the Raging Bull to hitherto unexplored territory.",
    },
    {
      name: "Bugatti Veyron",
      imgSrc: bugatti,
      price: "$1.9M",
      id: "4",
      brand: "Bugatti",
      description:
        'The Bugatti Veyron EB 16.4 is a mid-engine sports car, designed and developed in Germany by the Bugatti Engineering GmbH and manufactured by the Bugatti Automobiles SAS in Molsheim, France. The Veyron\'s fundamental concept is based on a technical draft of Bugatti chief engineer and "Technical Guru" Frank Götzke and it was named after the racing driver Pierre Veyron.',
    },
  ]);

  const addCar = (props: CarItemProp) => {
    setCars((old) => [...old, props]);
  };

  const deleteCar = (id: string) => {
    setCars((old) => [...old.filter((e) => e.id !== id)]);
  };

  return (
    <StoreContext.Provider value={{ cars, addCar, deleteCar }}>
      {children}
    </StoreContext.Provider>
  );
};
