import React from 'react';

import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import MainWrapper from './components/MainWrapper';

const App = () => {
  return (
    <div>
      <div className="wrapper">
        <Sidebar />

        <MainWrapper />
      </div>

      <Footer />
    </div>
  );
};

export default App;