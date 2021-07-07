import React, { createContext } from "react";
import { useState } from "react";
import { porche1, porche2, porche3, porche4 } from "../assets";

interface ContextProp {
  cars: CarItemProp[];
  addCar: (props: CarItemProp) => void;
}

export const StoreContext = createContext<ContextProp>({
  cars: [],
  addCar: () => {},
});

export const StoreProvider: React.FC = ({ children }) => {
  const [cars, setCars] = useState<CarItemProp[]>([
    {
      name: "Porche 550 Spyder",
      imgSrc: porche1,
      price: "$102,100",
      id: "1",
      brand: "Porsche",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eius obcaecati blanditiis in. Aliquam reiciendis dicta illo repudiandae, incidunt ducimus.",
    },
    {
      name: "Porche Panamera",
      imgSrc: porche2,
      price: "$102,100",
      id: "2",
      brand: "Porsche",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eius obcaecati blanditiis in. Aliquam reiciendis dicta illo repudiandae, incidunt ducimus.",
    },
    {
      name: "Porsche 718",
      imgSrc: porche3,
      price: "$102,100",
      id: "3",
      brand: "Porsche",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eius obcaecati blanditiis in. Aliquam reiciendis dicta illo repudiandae, incidunt ducimus.",
    },
    {
      name: "Porche 911",
      imgSrc: porche4,
      price: "$102,100",
      id: "4",
      brand: "Porsche",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eius obcaecati blanditiis in. Aliquam reiciendis dicta illo repudiandae, incidunt ducimus.",
    },
  ]);

  const addCar = (props: CarItemProp) => {
    setCars((old) => [...old, props]);
  };

  return (
    <StoreContext.Provider value={{ cars, addCar }}>
      {children}
    </StoreContext.Provider>
  );
};
