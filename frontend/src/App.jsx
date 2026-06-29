import { Routes, Route } from 'react-router-dom';
import BackgroundEffects from './components/BackgroundEffects';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import ChildSafety from './pages/ChildSafety';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <>
      <BackgroundEffects />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/child-safety" element={<ChildSafety />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}