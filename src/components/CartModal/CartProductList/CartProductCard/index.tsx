import { MdDelete } from 'react-icons/md';

import { useContext } from 'react';
import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { CartContext } from '../../../../providers/CartContext';

interface iNewList {
  newList: [];
}

const CartProductCard = ({ name, img, id, price }: any) => {
  const { cartProducts, setCartProducts, totalPrice, setTotalPrice } =
    useContext(CartContext);

  return (
    <StyledCartProductCard id={id}>
      <div className='imageBox'>
        <img src={img} alt={name} />
      </div>
      <div className='contentBox'>
        <StyledTitle tag='h3' $fontSize='three'>
          {name}
        </StyledTitle>
        <button
          id={id}
          type='button'
          aria-label='Remover'
          onClick={() => {
            const newList: iNewList | never[] = cartProducts.filter(
              (product: any) => product.id !== id
            );
            setTotalPrice(totalPrice - price);
            setCartProducts(newList);
          }}
        >
          <MdDelete size={24} />
        </button>
      </div>
    </StyledCartProductCard>
  );
};
export default CartProductCard;
