import 'tailwindcss/tailwind.css'
import Appbar from '@/app/components/Appbar';
import Bottom from '@/app/components/Bottom';
import Drawer from '@/app/components/Drawer';
import React, {useContext, useState} from 'react';
import { CartContext } from '@/app/contexts/CartContext';

const CartPage = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState();
  const { cartItems, removeFromCart } = useContext(CartContext);


  const handleMenuToggle  = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <main className="min-h-screen">
      <Appbar onMenuToggle={handleMenuToggle}></Appbar>
      <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>

        <h1>Cart</h1>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
                <p>Price: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
            </li>
          ))}
        </ul>

      <Bottom></Bottom>
    </main>
  );

}
export default CartPage;