import React, { useEffect, useState } from "react";
import { Container } from "../components";
import { HiOutlineX, HiOutlineTrash } from "react-icons/hi";
import { motion } from "framer-motion";
import { useHistory, useParams } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../contexts/StoreContext";
import { getLogo } from "../assets/helpers";

const listItem = {
  initial: { marginTop: 200, opacity: 0 },
  animate: { marginTop: 0, opacity: 1 },
};

const CarDetail: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const { cars, deleteCar } = useContext(StoreContext);
  const [car, setCar] = useState<CarItemProp | null>(null);

  useEffect(() => {
    const _car = cars.find((e) => e.id === id);
    if (_car) setCar(_car);
  }, []);

  return (
    <Container>
      <motion.button
        onClick={() => history.goBack()}
        initial={{ opacity: 0, marginRight: -100 }}
        animate={{ opacity: 0.5, marginRight: 0 }}
        transition={{
          duration: 0.3,
        }}
        className="absolute z-10 top-2 right-2 lg:right-6 lg:top-6 xl:right-10 xl:top-10"
      >
        <HiOutlineX className="w-12 h-12 text-gray-500 lg:w-16 lg:h-16 hover:opacity-70" />
      </motion.button>

      <div className="flex items-center justify-center mt-8">
        <motion.img
          initial={{ marginTop: -200 }}
          animate={{ marginTop: 0 }}
          transition={{ duration: 0.3 }}
          src={getLogo(car?.brand)}
          alt={getLogo(car?.brand)}
          className="object-contain h-32"
        />
      </div>

      <nav className="flex items-center justify-between mt-16">
        <motion.h1
          initial={{ opacity: 1 }}
          animate={{ opacity: 0.2 }}
          layoutId="car-name"
          className="w-full text-4xl font-extrabold text-center text-gray-500 md:text-6xl lg:text-8xl"
        >
          {car?.name}
        </motion.h1>
      </nav>

      <div className="min-h-[128px]" />

      <div className="flex flex-col space-x-0 space-y-12 lg:space-y-0 lg:space-x-12 lg:flex-row">
        <div className="flex-1">
          <motion.img
            layoutId={`car-image-${id}`}
            src={car?.imgSrc}
            className="self-center object-contain w-3/4 mx-auto lg:w-full"
            alt={car?.imgSrc}
          />
        </div>

        <div className="flex flex-col flex-1 space-y-4">
          <motion.div
            variants={listItem}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-600 uppercase">
                Description
              </h3>

              <button
                onClick={() => {
                  deleteCar(id);
                  history.goBack();
                }}
              >
                <HiOutlineTrash className="w-4 h-4 text-red-500" />
              </button>
            </div>

            <p className="mb-4 text-sm text-gray-300 md:text-base">
              {car?.description}
            </p>
          </motion.div>

          <motion.div
            variants={listItem}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-600 uppercase">
              Price
            </h3>
            <p className="mb-4 text-2xl text-blue-300 lg:text-4xl">
              {car?.price}
            </p>
          </motion.div>

          {!!car?.other && (
            <motion.div
              variants={listItem}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-600 uppercase">
                Other
              </h3>
              <p className="mb-4 text-sm text-gray-300 md:text-base">
                Lorem ipsum dolor sit amet.
              </p>
            </motion.div>
          )}
        </div>
      </div>

      <div className="h-64" />
    </Container>
  );
};

export default CarDetail;
