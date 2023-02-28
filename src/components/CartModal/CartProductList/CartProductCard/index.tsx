import { MdDelete } from 'react-icons/md';

import { useContext } from 'react';
import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { CartContext } from '../../../../providers/CartContext';

const CartProductCard = ({ name, img, id }: any) => {
  const { cartProducts, setCartProducts } = useContext(CartContext);

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
            const newList = cartProducts.filter(
              (product: any) => product.id !== id
            );
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
