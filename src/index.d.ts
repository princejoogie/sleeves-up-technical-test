interface CarItemProp {
  imgSrc: string;
  brand: CarBrands;
  name: string;
  price: string;
  description: string;
  other?: string;
  id: string;
}

type CarBrands =
  | "BMW"
  | "Mercedes-Benz"
  | "Audi"
  | "Tesla"
  | "Porsche"
  | "Lexus"
  | "Volvo"
  | "Lamborghini"
  | "Ferrari"
  | "Jaguar"
  | "Cadillac"
  | "Rolls-Royce"
  | "Maserati"
  | "Bugatti";
