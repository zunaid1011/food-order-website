import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { Login } from './components/Login';
import { Footer } from './components/Footer';
import { menuItems } from './data/menuItems';
import { CartItem, MenuItem, UserDetails } from './types';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (itemId: string, change: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === itemId
            ? { ...item, quantity: Math.max(0, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const handlePlaceOrder = (userDetails: UserDetails) => {
    console.log('Order placed:', { userDetails, items: cartItems });
    alert('Order placed successfully! Thank you for your order.');
    setCartItems([]);
    setIsCheckoutOpen(false);
  };

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        onCartClick={() => setIsCartOpen(true)}
        cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onLoginClick={() => setIsLoginOpen(true)}
      />
      
      <main className="flex-1">
        <Hero onOrderNow={scrollToMenu} />
        <Menu items={menuItems} onAddToCart={handleAddToCart} />
        <About />
        <Contact />
      </main>

      <Footer />

      <Cart
        items={cartItems}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      <Checkout
        items={cartItems}
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onPlaceOrder={handlePlaceOrder}
      />

      <Login
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </div>
  );
}

export default App;