import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { Home } from './pages/Home';
import { Campaigns } from './pages/Campaigns';
import { CampaignDetail } from './pages/CampaignDetail';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
        <Header 
          mobileMenuOpen={mobileMenuOpen} 
          setMobileMenuOpen={setMobileMenuOpen} 
        />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/campaign/:id" element={<CampaignDetail />} />
            <Route path="/about" element={
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About Us</h1>
                  <p className="text-gray-600 dark:text-gray-400">Coming soon...</p>
                </div>
              </div>
            } />
            <Route path="/contact" element={
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact</h1>
                  <p className="text-gray-600 dark:text-gray-400">Coming soon...</p>
                </div>
              </div>
            } />
            <Route path="/start-campaign" element={
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Start a Campaign</h1>
                  <p className="text-gray-600 dark:text-gray-400">Coming soon...</p>
                </div>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;