import { useContext } from 'react';
import { toast } from 'react-toastify';
import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { CartContext } from '../../../providers/CartContext';

const ProductCard = ({
  name,
  id,
  img,
  category,
  price,
  product,
}: any & never) => {
  const { cartProducts, totalPrice, setTotalPrice } = useContext(CartContext);

  return (
    <StyledProductCard>
      <div className='imageBox'>
        <img src={img} alt={category} />
      </div>
      <div className='content'>
        <StyledTitle tag='h3' $fontSize='three'>
          {name}
        </StyledTitle>
        <StyledParagraph className='category'>{category}</StyledParagraph>
        <StyledParagraph className='price'>R${price},00</StyledParagraph>
        <StyledButton
          onClick={() => {
            if (cartProducts.includes(product)) {
              toast.error('Este produto já está no carrinho');
            } else {
              cartProducts.push(product);
              setTotalPrice(totalPrice + price);
              toast.success('Produto adicionado com sucesso!');
            }
          }}
          id={id}
          $buttonSize='medium'
          $buttonStyle='green'
        >
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  );
};
export default ProductCard;
