import { useEffect, useState } from 'react';
import { StyledProductList } from './style';
import ProductCard from './ProductCard';

import { api } from '../../services/api';
import { iProduct } from '../../interfaces';

const ProductList = () => {
  const [products, setProducts] = useState<iProduct[]>([]);

  useEffect(() => {
    const token: string | null = localStorage.getItem('@TOKEN');
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
