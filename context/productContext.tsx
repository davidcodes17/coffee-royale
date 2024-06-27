import { useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  ratting: number;
  image: string;
  createdAt: string;
}

interface ProductContextProps {
  products: Product[] | null;
  setProducts: React.Dispatch<React.SetStateAction<Product[] | null>>;
  setProduct: React.Dispatch<React.SetStateAction<Product | null>>;
  product: Product | null;
}

const [product, setProduct] = useState<Product>();
const [products, setProducts] = useState<Product[]>([]);
