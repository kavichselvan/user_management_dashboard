import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import EditUser from './pages/EditUser';
import AddUser from './pages/AddUser';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Updated to use the 'element' prop */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="/add" element={<AddUser />} />
        {/* Optional: Add a fallback route for unmatched paths */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
