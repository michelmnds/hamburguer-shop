import { useEffect, useState } from 'react';
import { StyledProductList } from './style';
import ProductCard from './ProductCard';
import { token } from '../../providers/UserContext';
import { api } from '../../services/api';

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
        console.log(products);
      } catch (error) {
        console.log(error);
      }
    };
    loadProducts();
  }, []);

  return (
    <StyledProductList>
      {products.map((product: any) => (
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
