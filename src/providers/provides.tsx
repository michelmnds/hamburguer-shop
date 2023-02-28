import React from 'react';
import { UserProvider } from './UserContext';
import { CartProvider } from './CartContext';

interface iProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: iProvidersProps) => (
  <UserProvider>
    <CartProvider>{children}</CartProvider>
  </UserProvider>
);
