import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "./index";
import { HiOutlineX } from "react-icons/hi";
import { carBrandList } from "../constants";
import { useContext } from "react";
import { StoreContext } from "../contexts/StoreContext";
import { v4 } from "uuid";

interface Props {
  setModalShown: React.Dispatch<React.SetStateAction<boolean>>;
}

const styles = {
  textarea:
    "w-full h-20 px-4 py-2 mt-1 bg-gray-700 border border-gray-700 rounded resize-none focus:border-blue-500",
  input:
    "w-full px-4 py-2 mt-1 bg-gray-700 border border-gray-700 rounded focus:border-blue-500",
  button:
    "px-4 py-2 ml-auto bg-blue-500 border border-blue-500 rounded hover:opacity-70 active:opacity-100 focus:border-gray-200",
};

const AddCarModal: React.FC<Props> = ({ setModalShown }) => {
  const [state, setState] = useState<CarItemProp>({
    name: "",
    price: "",
    brand: "Audi",
    id: "",
    description: "",
    other: "",
    imgSrc: "",
  });

  const { addCar } = useContext(StoreContext);

  const isValid = () => {
    if (
      !state.name ||
      !state.price ||
      !state.brand ||
      !state.description ||
      !state.imgSrc
    )
      return false;
    return true;
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (isValid()) {
      let _state = state;
      _state.id = v4();

      addCar(_state);
      setModalShown(false);
    } else {
      alert("Missing Fields required.");
    }
  };

  const handleChange = (value: string, key: string) => {
    setState((old) => ({ ...old, [key]: value }));
  };

  return (
    <motion.div
      initial={{ top: 999, opacity: 0 }}
      animate={{ top: 0, opacity: 1 }}
      exit={{ top: 999, opacity: 0 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center bg-transparent"
      style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
    >
      <Container className="relative !p-8 !mx-2 bg-gray-900 text-gray-300">
        <button
          className="absolute top-2 right-2"
          onClick={() => setModalShown(false)}
        >
          <HiOutlineX className="w-6 h-6 text-gray-500 hover:opacity-70" />
        </button>

        <form
          onSubmit={onSubmit}
          className="flex flex-col space-x-0 md:space-x-8 md:flex-row"
        >
          <div className="flex flex-col flex-1 space-y-4">
            <div className="w-full">
              <p className="font-bold text-gray-400 uppercase">
                Image URL <span className="text-red-500">*</span>
              </p>
              <input
                value={state.imgSrc}
                onChange={(e) => handleChange(e.target.value, "imgSrc")}
                type="text"
                className={styles.input}
              />
            </div>

            <img
              src={state.imgSrc ?? "Add a url"}
              alt={state.imgSrc}
              className="flex-1 object-contain w-full overflow-hidden bg-gray-900 rounded"
            />
          </div>

          <div className="flex-1">
            <p className="font-bold text-gray-400 uppercase">
              Name <span className="text-red-500">*</span>
            </p>
            <input
              value={state.name}
              onChange={(e) => handleChange(e.target.value, "name")}
              type="text"
              className={styles.input}
            />

            <div className="flex space-x-4">
              <div className="flex-1">
                <p className="mt-4 font-bold text-gray-400 uppercase">
                  Price <span className="text-red-500">*</span>
                </p>
                <input
                  value={state.price}
                  onChange={(e) => handleChange(e.target.value, "price")}
                  type="text"
                  className={styles.input}
                />
              </div>

              <div className="flex-1">
                <p className="mt-4 font-bold text-gray-400 uppercase">
                  Brand <span className="text-red-500">*</span>
                </p>
                <select
                  value={state.brand}
                  onChange={(e) => handleChange(e.target.value, "brand")}
                  name=""
                  id=""
                  className={styles.input}
                >
                  {carBrandList.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <p className="mt-4 font-bold text-gray-400 uppercase">
              Description <span className="text-red-500">*</span>
            </p>
            <textarea
              value={state.description}
              onChange={(e) => handleChange(e.target.value, "description")}
              className={styles.textarea}
            />

            <p className="mt-4 font-bold text-gray-400 uppercase">Others</p>
            <textarea
              value={state.other}
              onChange={(e) => handleChange(e.target.value, "other")}
              className={styles.textarea}
            />

            <div className="flex mt-8">
              <button type="submit" className={styles.button}>
                Add Car
              </button>
            </div>
          </div>
        </form>
      </Container>
    </motion.div>
  );
};

export default AddCarModal;
