import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Product } from '../@types/types';
import { localShoppingCarKey } from '../constants/localStorageKeys';
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
    const shoppingCarLocalStorage: Product[] = JSON.parse(
      localStorage.getItem(localShoppingCarKey) || ''
    );

    setProductsShoppingCar(shoppingCarLocalStorage);
  }, []);

  const changeSessionStorage = (newShoppingCar: Product[]) => {
    localStorage.setItem(localShoppingCarKey, JSON.stringify(newShoppingCar));
  };
  const addCar = (newProduct: Product) => {
    if (productsShoppingCar.find((ele) => ele.id === newProduct.id)) return;

    const newProductsShoppingCar = [...productsShoppingCar, newProduct];
    setProductsShoppingCar(newProductsShoppingCar);

    changeSessionStorage(newProductsShoppingCar);
  };

  const removeCar = (idProduct: string) => {
    const newProductsShoppingCar = productsShoppingCar.filter(
      (p) => p.id !== idProduct
    );
    setProductsShoppingCar(newProductsShoppingCar);
    changeSessionStorage(newProductsShoppingCar);
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
