
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Consultations from './pages/Consultations';
import Courses from './pages/Courses';
import Community from './pages/Community';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consultations" element={<Consultations />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<ProductDetail />} />
          <Route path="/community" element={<Community />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
