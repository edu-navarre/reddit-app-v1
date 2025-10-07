import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header';
import Categories from './Features/Categories/Categories';
import ErrorBoundary from './Components/ErrorBoundary';
import './App.css';

function App() {

  return (
    <div className="global-header">
      <Header />
      <ErrorBoundary>
        <Categories />
      </ErrorBoundary>
      <div className="main-content">
        <ErrorBoundary>
          <Outlet /> {/* This is where route-specific content will render */}
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;