"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useCallback,
} from "react";
import axios from "axios";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  rating: number;
  image: string;
  createdAt: string;
}

interface CartItem {
  id: string;
  userId: string;
  productId: string;
  product: Product;
  quantity: number;
  createdAt: string;
}

interface CartContextProps {
  cart: CartItem[];
  total: number;
  fetchCart: () => void;
  addToCart: (productId: string, quantity: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateCartItem: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [total, setTotal] = useState<number>(0);

  // Function to calculate the total price based on cart items
  const calculateTotal = useCallback(() => {
    const totalAmount = cart?.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
    setTotal(totalAmount);
  }, [cart]);

  // Fetch the cart from the server
  const fetchCart = useCallback(async () => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      try {
        const response = await axios.get(`/api/cart/${userId}`, {
          withCredentials: true,
          headers: {
            // Any additional headers can be added here
          },
        });
        setCart(response.data.orders);
      } catch (error) {
        console.error("Error fetching cart", error);
      }
    }
  }, []);

  // Add an item to the cart
  const addToCart = useCallback(async (productId: string, quantity: number) => {
    const userId = localStorage.getItem("userId");
    if (!userId) return;

    try {
      const response = await axios.post(
        "/api/cart",
        {
          userId,
          productId,
          quantity,
        },
        {
          withCredentials: true,
          headers: {
            // Any additional headers can be added here
          },
        }
      );
      setCart(response.data.orders);
      fetchCart();
    } catch (error) {
      console.error("Error adding to cart", error);
    }
  }, []);

  // Remove an item from the cart
  const removeFromCart = useCallback(async (cartItemId: string) => {
    try {
      await axios.delete(`/api/cart/${cartItemId}`, {
        withCredentials: true,
        headers: {
          // Any additional headers can be added here
        },
      });
      setCart((prevCart) => prevCart.filter((item) => item.id !== cartItemId));
      fetchCart();
    } catch (error) {
      console.error("Error removing from cart", error);
    }
  }, []);

  // Update the quantity of a cart item
  const updateCartItem = useCallback((cartItemId: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === cartItemId) {
          return { ...item, quantity };
        }
        return item;
      })
    );
    fetchCart();
  }, []);

  // Clear the cart
  const clearCart = useCallback(() => {
    setCart([]);
    setTotal(0);
    fetchCart();
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  useEffect(() => {
    calculateTotal();
  }, [cart, calculateTotal]);

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        fetchCart,
        addToCart,
        removeFromCart,
        updateCartItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
