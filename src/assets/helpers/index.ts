import {
  logoAudi,
  logoBenz,
  logoBmw,
  logoBugatti,
  logoCadillac,
  logoFerrari,
  logoJaguar,
  logoLambo,
  logoLexus,
  logoMaserati,
  logoPorche,
  logoRoyce,
  logoTesla,
  logoVolvo,
} from "../index";

export const getLogo = (brand: CarBrands | undefined): string | undefined => {
  if (brand === "Audi") return logoAudi;
  else if (brand === "BMW") return logoBmw;
  else if (brand === "Bugatti") return logoBugatti;
  else if (brand === "Cadillac") return logoCadillac;
  else if (brand === "Ferrari") return logoFerrari;
  else if (brand === "Jaguar") return logoJaguar;
  else if (brand === "Lamborghini") return logoLambo;
  else if (brand === "Lexus") return logoLexus;
  else if (brand === "Maserati") return logoMaserati;
  else if (brand === "Mercedes-Benz") return logoBenz;
  else if (brand === "Porsche") return logoPorche;
  else if (brand === "Rolls-Royce") return logoRoyce;
  else if (brand === "Tesla") return logoTesla;
  else if (brand === "Volvo") return logoVolvo;

  return undefined;
};
