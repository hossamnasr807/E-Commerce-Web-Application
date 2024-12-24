import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext'; // Import the context
import { CartProvider } from './context/CartContext'; // Import CartProvider
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MobilePhonesPage from './pages/MobilePhonesPage';
import TrousersPage from './pages/TrousersPage';
import JacketsPage from './pages/JacketsPage';
import LaptopsPage from './pages/LaptopsPage'; // Import the LaptopsPage component
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import CartPage from './pages/CartPage'; // Import CartPage
import FavoritesPage from './pages/FavoritesPage'; // Import FavoritesPage
import PopupMessage from './components/PopupMessage';
import { useCart } from './context/CartContext';
import { useFavorites } from './context/FavoritesContext';
import ThankYouPage from './pages/ThankYouPage'; // Thank-you page after payment
import PaymentMethodSelection from './components/PaymentMethodSelection';
import Fawry from './components/Fawry';
import DigitalWallet from './components/DigitalWallet';
import CreditCardPage from './components/CreditCardPage'; // Ensure path matches

function App() {
  return (
    <FavoritesProvider>
      <CartProvider>
        <Router>
          {/* Popup messages for both cart and favorites */}
          <CartAndFavoritesPopups />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/mobile-phones" element={<MobilePhonesPage />} />
              <Route path="/trousers" element={<TrousersPage />} />
              <Route path="/jackets" element={<JacketsPage />} />
              <Route path="/laptops" element={<LaptopsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/payment" element={<PaymentMethodSelection />} />
              <Route path="/thank-you" element={<ThankYouPage />} />
              <Route path="/fawry" element={<Fawry />} />
              <Route path="/digital-wallet" element={<DigitalWallet />} />
              <Route path="/credit-card" element={<CreditCardPage />} /> {/* Corrected route */}
            </Routes>
          </main>
          <Footer />
        </Router>
      </CartProvider>
    </FavoritesProvider>
  );
}

// Extracted popup rendering logic for clarity
const CartAndFavoritesPopups = () => {
  const { popup: cartPopup } = useCart();
  const { popup: favoritesPopup } = useFavorites();

  return (
    <>
      <PopupMessage message={cartPopup.message} type={cartPopup.type} />
      <PopupMessage message={favoritesPopup.message} type={favoritesPopup.type} />
    </>
  );
};

export default App;
