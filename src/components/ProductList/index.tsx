import { useEffect, useState } from 'react';
import { StyledProductList } from './style';
import ProductCard from './ProductCard';
import { token } from '../../providers/UserContext';
import { api } from '../../services/api';

export interface iProductCard {
  product: [];
  key: any;
  name: never;
  id: never;
  category: never;
  img: never;
  price: never;
}

const ProductList = () => {
  const [products, setProducts] = useState<[]>([]);

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
      {products.map((product: iProductCard) => (
        <ProductCard
          product={product}
          key={product.id}
          name={product.name}
          category={product.category}
          id={product.id}
          img={product.img}
          price={product.price}
        />
      ))}
    </StyledProductList>
  );
};
export default ProductList;
