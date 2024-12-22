import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MobilePhonesPage from './pages/MobilePhonesPage';
import TrousersPage from './pages/TrousersPage';
import JacketsPage from './pages/JacketsPage';
import FurniturePage from './pages/FurniturePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import CartPage from './pages/CartPage'; // Import CartPage
import { CartProvider } from './context/CartContext'; // Import CartProvider

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mobile-phones" element={<MobilePhonesPage />} />
            <Route path="/trousers" element={<TrousersPage />} />
            <Route path="/jackets" element={<JacketsPage />} />
            <Route path="/furniture" element={<FurniturePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/cart" element={<CartPage />} /> {/* Add this route */}
          </Routes>
        </main>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
