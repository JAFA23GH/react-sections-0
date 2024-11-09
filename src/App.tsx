import { useState } from 'react'
import './App.css'
import CTA from './components/CTASection'
import Footer from './components/Footer';

function App() {
  return (
    <div className='relative h-screen'>
      <CTA/>
      <Footer/>
    </div>    
  );
}

export default App
