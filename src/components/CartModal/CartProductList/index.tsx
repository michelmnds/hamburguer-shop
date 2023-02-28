import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import CartProductCard from './CartProductCard';

import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { CartContext } from '../../../providers/CartContext';

const CartProductList = () => {
  const { setCartProducts, cartProducts, setTotalPrice, totalPrice } =
    useContext(CartContext);

  if (cartProducts.length !== 0) {
    return (
      <StyledCartProductList>
        <ul>
          {cartProducts.map((product: any) => (
            <CartProductCard
              key={product.id}
              name={product.name}
              img={product.img}
              id={product.id}
            />
          ))}
        </ul>

        <div className='totalBox'>
          <StyledParagraph>
            <strong>Total</strong>
          </StyledParagraph>
          <StyledParagraph className='total'>R${totalPrice},00</StyledParagraph>
        </div>
        <StyledButton
          $buttonSize='default'
          $buttonStyle='gray'
          onClick={() => {
            setCartProducts([]);
            setTotalPrice(0);
            toast.success('Todos os produtos foram removidos com sucesso!');
          }}
        >
          Remover todos
        </StyledButton>
      </StyledCartProductList>
    );
  }
};
export default CartProductList;
