import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Product } from '../@types/types';
import { sessionShoppingCarKey } from '../constants/sessionStorageKeys';
const ShoppingCarContext = createContext<ShoppingCarContextData>(
  [] as unknown as ShoppingCarContextData
);

interface ShoppingCarProviderProps {
  children: ReactNode;
}

interface ShoppingCarContextData {
  productsShoppingCar: Product[];
  removeCar: (idProduct: string) => void;
  addCar: (newProduct: Product) => void;
}

export const ShoppingCarProvider = ({ children }: ShoppingCarProviderProps) => {
  const [productsShoppingCar, setProductsShoppingCar] = useState<Product[]>([]);

  useEffect(() => {
    sessionStorage.setItem(
      sessionShoppingCarKey,
      JSON.stringify(productsShoppingCar)
    );
  }, [productsShoppingCar]);

  const addCar = (newProduct: Product) => {
    if (productsShoppingCar.find((ele) => ele.id === newProduct.id)) return;

    const newProductsShoppingCar = [...productsShoppingCar, newProduct];
    setProductsShoppingCar(newProductsShoppingCar);
  };

  const removeCar = (idProduct: string) => {
    const newProductsShoppingCar = productsShoppingCar.filter(
      (p) => p.id !== idProduct
    );
    setProductsShoppingCar(newProductsShoppingCar);
  };

  return (
    <ShoppingCarContext.Provider
      value={{ addCar, removeCar, productsShoppingCar }}
    >
      {children}
    </ShoppingCarContext.Provider>
  );
};

export function useShoppingCar(): ShoppingCarContextData {
  const context = useContext(ShoppingCarContext);

  return context;
}
