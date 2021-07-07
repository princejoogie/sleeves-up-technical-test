import React, { useState } from "react";
import { Container, AddCarModal } from "../components";
import { HiOutlinePlus } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { StoreContext } from "../contexts/StoreContext";

const Dashboard: React.FC = () => {
  const { cars } = useContext(StoreContext);
  const [modalShown, setModalShown] = useState(false);

  return (
    <Container>
      <AnimatePresence>
        {modalShown && <AddCarModal {...{ setModalShown }} />}
      </AnimatePresence>

      <nav className="flex items-center justify-between mt-16">
        <motion.h1
          layoutId="car-name"
          className="flex-1 text-3xl font-semibold text-gray-500 md:text-4xl lg:text-5xl"
        >
          Fast Exotic Cars Pty Ltd
        </motion.h1>

        <div className="flex items-center justify-end flex-1">
          <motion.button
            onClick={() => setModalShown(!modalShown)}
            initial={{ opacity: 0, marginRight: -100 }}
            animate={{ opacity: 1, marginRight: 0 }}
            transition={{
              duration: 0.3,
            }}
            className="flex items-center space-x-1 text-gray-500 hover:text-gray-300 group"
          >
            <p className="transition-colors duration-500">Add Car</p>
            <HiOutlinePlus className="w-6 h-6 transition-colors duration-500" />
          </motion.button>
        </div>
      </nav>

      <div className="h-36" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        {cars.map((item) => (
          <Item key={`car-${item.id}`} {...{ ...item }} />
        ))}
      </div>
    </Container>
  );
};

const Item: React.FC<CarItemProp> = (props) => {
  const { imgSrc, name, price, id, description } = props;

  return (
    <Link to={`/car/${id}`}>
      <div className="relative flex flex-col items-start justify-between h-full p-4 transition-all duration-500 bg-transparent border border-gray-700 cursor-pointer rounded-xl group hover:border-gray-400">
        <motion.img
          layoutId={`car-image-${id}`}
          src={imgSrc}
          className="self-end object-contain w-1/2 -mt-16 md:self-center md:w-3/4 lg:w-full"
          alt={imgSrc}
        />

        <div>
          <h2 className="mt-4 font-bold text-gray-300 line-clamp-2">{name}</h2>
          <h4 className="text-xl font-light text-blue-300 line-clamp-1">
            {price}
          </h4>

          <p className="mt-4 text-sm text-gray-500 line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Dashboard;
