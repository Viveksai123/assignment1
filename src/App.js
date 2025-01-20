import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider, ThemeProvider } from './context';
import Home from './pages/Home';
import UserDetail from './pages/UserDetail';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import ParticlesComponent from './pages/Parallax';

const App = () => (
  <UserProvider>
    <ThemeProvider>
      <Router>
        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Header has a higher z-index to be on top */}
          <Header />
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
          {/* ParticlesComponent is behind */}
          <ParticlesComponent style={{ zIndex: 0 }} />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<UserDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </UserProvider>
);

export default App;
