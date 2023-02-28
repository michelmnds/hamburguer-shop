import { useEffect, useState } from 'react';
import { StyledProductList } from './style';
import ProductCard from './ProductCard';
import { token } from '../../providers/UserContext';
import { api } from '../../services/api';
import { iProduct } from '../../interfaces';

const ProductList = () => {
  const [products, setProducts] = useState<iProduct[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await api.get('/products', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    loadProducts();
  }, []);

  return (
    <StyledProductList>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </StyledProductList>
  );
};
export default ProductList;
