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
  changeQuantityProductCar: (productId: string, newQuantity: number) => void;
}

export const ShoppingCarProvider = ({ children }: ShoppingCarProviderProps) => {
  const [productsShoppingCar, setProductsShoppingCar] = useState<Product[]>([]);

  useEffect(() => {
    const shoppingCarLocalStorage: Product[] = JSON.parse(
      localStorage.getItem(localShoppingCarKey) || '[]'
    );

    setProductsShoppingCar(shoppingCarLocalStorage);
  }, []);

  const changeSessionStorage = (newShoppingCar: Product[]) => {
    localStorage.setItem(localShoppingCarKey, JSON.stringify(newShoppingCar));
  };

  const updateProductsShooppingCarAndSessionStorage = (
    newShoppingCar: Product[]
  ) => {
    setProductsShoppingCar(newShoppingCar);
    changeSessionStorage(newShoppingCar);
  };

  const changeQuantityProductCar = (productId: string, newQuantity: number) => {
    console.log(newQuantity);
    const newQuantityProduct = productsShoppingCar.map((p) =>
      p.id === productId ? { ...p, quantity: newQuantity } : p
    );
    console.log(newQuantityProduct);

    updateProductsShooppingCarAndSessionStorage(newQuantityProduct);
  };

  const addCar = (newProduct: Product) => {
    if (productsShoppingCar.find((ele) => ele.id === newProduct.id)) return;
    const newProductsShoppingCar = [
      ...productsShoppingCar,
      { ...newProduct, quantity: 1 },
    ];

    updateProductsShooppingCarAndSessionStorage(newProductsShoppingCar);
  };

  const removeCar = (idProduct: string) => {
    const newProductsShoppingCar = productsShoppingCar.filter(
      (p) => p.id !== idProduct
    );

    updateProductsShooppingCarAndSessionStorage(newProductsShoppingCar);
  };

  return (
    <ShoppingCarContext.Provider
      value={{
        addCar,
        removeCar,
        productsShoppingCar,
        changeQuantityProductCar,
      }}
    >
      {children}
    </ShoppingCarContext.Provider>
  );
};

export function useShoppingCar(): ShoppingCarContextData {
  const context = useContext(ShoppingCarContext);

  return context;
}
