import { createContext, useState } from 'react';
import { object } from 'yup';

interface iCartContextProps {
  children: React.ReactNode;
}

interface iCart {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface iCartContext {
  cartModal: boolean;
  setCartModal: React.Dispatch<React.SetStateAction<boolean>>;
  closeModal: () => void;
  cartProducts: [];
  setCartProducts: React.Dispatch<React.SetStateAction<[]>>;
  totalPrice: number;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
}

export const CartContext = createContext({} as iCartContext);

export const CartProvider = ({ children }: iCartContextProps) => {
  const [cartModal, setCartModal] = useState<false | true>(true);
  const [cartProducts, setCartProducts] = useState<[]>([]);

  const closeModal = () => {
    setCartModal(!cartModal);
  };

  const [totalPrice, setTotalPrice] = useState<number>(0);

  return (
    <CartContext.Provider
      value={{
        cartModal,
        setCartModal,
        closeModal,
        cartProducts,
        setCartProducts,
        totalPrice,
        setTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
