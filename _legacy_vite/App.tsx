import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Hub from './pages/Hub';
import VoltageDetail from './pages/VoltageDetail';
import { VOLTAGE_PAGES } from './constants';

// Correctly implemented ScrollToTop using useLocation
const ScrollToTopHandler = () => {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTopHandler />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/variable-power-supplies" element={<Hub />} />
          
          {/* Dynamically generate explicit routes for each voltage page to support flat URLs */}
          {VOLTAGE_PAGES.map((page) => (
            <Route 
              key={page.slug} 
              path={page.slug} 
              element={<VoltageDetail />} 
            />
          ))}

          {/* Fallback for unmatched routes */}
          <Route path="*" element={<Hub />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;