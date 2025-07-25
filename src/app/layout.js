// src/app/layout.js
import './globals.css';
import { Inter } from 'next/font/google';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import ShoppingCart from '@/components/ShoppingCart';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Yashasveeni',
  description: 'Your one-stop shop for spices and more!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <div className="min-h-screen bg-cream-50">
            <Navbar />
            <main>{children}</main>
            <ShoppingCart />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
