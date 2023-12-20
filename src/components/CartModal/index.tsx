import { MdClose } from 'react-icons/md';
import { useContext } from 'react';
import CartProductList from './CartProductList';

import { StyledCartModalBox } from './style';
import { CartContext } from '../../providers/CartContext';
import { StyledParagraph, StyledTitle } from '../../styles/typography';

const CartModal = () => {
  const { cartModal, closeModal, cartProducts } = useContext(CartContext);

  if (cartProducts.length !== 0) {
    return (
      <StyledCartModalBox>
        {cartModal}
        <dialog>
          <header>
            <StyledTitle tag='h2' $fontSize='three'>
              Shopping cart
            </StyledTitle>
            <button
              type='button'
              aria-label='Fechar'
              onClick={() => closeModal()}
            >
              <MdClose size={21} />
            </button>
          </header>
          <div className='cartBox'>
            <CartProductList />
          </div>
        </dialog>
      </StyledCartModalBox>
    );
  }
  return (
    <StyledCartModalBox>
      {cartModal}
      <dialog>
        <header>
          <StyledTitle tag='h2' $fontSize='three'>
            Shopping cart
          </StyledTitle>
          <button
            type='button'
            aria-label='Fechar'
            onClick={() => closeModal()}
          >
            <MdClose size={21} />
          </button>
        </header>
        <div className='cartBox'>
          <CartProductList />

          <div className='emptyBox'>
            <StyledTitle tag='h3' $fontSize='three' textAlign='center'>
              Empty
            </StyledTitle>
            <StyledParagraph textAlign='center'>Add items</StyledParagraph>
          </div>
        </div>
      </dialog>
    </StyledCartModalBox>
  );
};

export default CartModal;
