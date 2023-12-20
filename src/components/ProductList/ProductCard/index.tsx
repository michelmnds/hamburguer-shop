import { useContext } from 'react';
import { toast } from 'react-toastify';
import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { CartContext } from '../../../providers/CartContext';
import { iProduct } from '../../../interfaces';

interface iProductCardProps {
  product: iProduct;
}

const ProductCard = ({ product }: iProductCardProps) => {
  const { cartProducts, totalPrice, setTotalPrice } = useContext(CartContext);

  return (
    <StyledProductCard>
      <div className='imageBox'>
        <img src={product.img} alt={product.category} />
      </div>
      <div className='content'>
        <StyledTitle tag='h3' $fontSize='three'>
          {product.name}
        </StyledTitle>
        <StyledParagraph className='category'>
          {product.category}
        </StyledParagraph>
        <StyledParagraph className='price'>
          ${Math.floor(product.price)},00
        </StyledParagraph>
        <StyledButton
          onClick={() => {
            if (cartProducts.includes(product)) {
              toast.error('This product is already added!');
            } else {
              cartProducts.push(product);
              setTotalPrice(Math.floor(totalPrice + product.price));
              toast.success('Product successfully added!');
            }
          }}
          $buttonSize='medium'
          $buttonStyle='green'
        >
          Add to cart
        </StyledButton>
      </div>
    </StyledProductCard>
  );
};
export default ProductCard;
